import SyntaxHighlighter from 'react-syntax-highlighter';

export function code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '');

  return match
    ? <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
    : <code className={className} {...props} />
}