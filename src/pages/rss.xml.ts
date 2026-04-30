import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import type { APIRoute } from 'astro';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
});

function excerptFromBody(body: unknown, fallback: string): string {
  if (typeof body !== 'string') return fallback;
  const text = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/[#*`\[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 300);
  return text || fallback;
}

function toAbsoluteResourceUrls(html: string, site: URL): string {
  const base = site.href.replace(/\/$/, '');
  return html
    .replace(/href="\/(?!\/)/g, `href="${base}/`)
    .replace(/src="\/(?!\/)/g, `src="${base}/`);
}

function sanitizeFeedHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'img',
      'pre',
      'code',
      'span',
      'div',
      'figure',
      'figcaption',
      'u',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel', 'class', 'id', 'title'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'class'],
      code: ['class'],
      pre: ['class'],
      span: ['class', 'title'],
      p: ['class'],
      div: ['class'],
      th: ['colspan', 'rowspan', 'class'],
      td: ['colspan', 'rowspan', 'class'],
      table: ['class'],
      u: ['class'],
      '*': ['class', 'id'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
}

/** Map site-specific MDX to HTML-friendly markdown before MarkdownIt. */
function mdxSourceToMarkdown(body: string): string {
  let s = body;
  // <Dictionary word="…" explanation="…" /> (attributes may span lines)
  s = s.replace(
    /<Dictionary[\s\S]*?word="([^"]*)"[\s\S]*?explanation="[^"]*"[\s\S]*?\/>/g,
    '**$1**',
  );
  // Fenced code wrapped in <code> (valid in MDX, confuses plain markdown)
  s = s.replace(/<code>\s*\n/g, '\n');
  s = s.replace(/\n<\/code>\s*/g, '\n\n');
  return s;
}

function bodyToFeedHtml(body: unknown, site: URL, title: string): string {
  if (typeof body !== 'string') {
    return `<p>${sanitizeHtml(title)}</p>`;
  }
  const raw = mdxSourceToMarkdown(body);
  let html = md.render(raw);
  html = sanitizeFeedHtml(html);
  html = toAbsoluteResourceUrls(html, site);
  return html;
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('RSS requires `site` in astro.config (e.g. site: "https://typeofjust.in")');
  }

  const [allPosts, allInterviews] = await Promise.all([
    getCollection('posts'),
    getCollection('interviews'),
  ]);

  const merged: { body: unknown; data: { title: string; date: Date }; slug: string; path: 'posts' | 'interviews' }[] = [
    ...allPosts
      .filter((p) => p.data.published)
      .map((entry) => ({
        body: entry.body,
        data: entry.data,
        slug: entry.slug,
        path: 'posts' as const,
      })),
    ...allInterviews
      .filter((p) => p.data.published)
      .map((entry) => ({
        body: entry.body,
        data: entry.data,
        slug: entry.slug,
        path: 'interviews' as const,
      })),
  ].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const items = merged.map((item) => {
    const content = bodyToFeedHtml(item.body, site, item.data.title);
    return {
      title: item.data.title,
      link: `/${item.path}/${item.slug}`,
      pubDate: item.data.date,
      description: excerptFromBody(item.body, item.data.title),
      content,
    };
  });

  return rss({
    title: 'typeof just.in',
    description: "Justin George's writing and interviews.",
    site,
    items,
    trailingSlash: false,
    customData: '<language>en</language>',
  });
};
