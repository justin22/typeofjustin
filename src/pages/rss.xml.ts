import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

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

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('RSS requires `site` in astro.config (e.g. site: "https://typeofjust.in")');
  }

  const [allPosts, allInterviews] = await Promise.all([
    getCollection('posts'),
    getCollection('interviews'),
  ]);

  const items = [
    ...allPosts
      .filter((p) => p.data.published)
      .map((p) => ({
        title: p.data.title,
        link: `/posts/${p.slug}`,
        pubDate: p.data.date,
        description: excerptFromBody(p.body, p.data.title),
      })),
    ...allInterviews
      .filter((p) => p.data.published)
      .map((p) => ({
        title: p.data.title,
        link: `/interviews/${p.slug}`,
        pubDate: p.data.date,
        description: excerptFromBody(p.body, p.data.title),
      })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'typeof just.in',
    description: "Justin George's writing and interviews.",
    site,
    items,
    trailingSlash: false,
    customData: '<language>en</language>',
  });
};
