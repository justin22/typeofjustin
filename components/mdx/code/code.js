import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-dark";



export function code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '');

  return match
    ? <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={{ ...theme, hljs: { ...theme.hljs, padding: 20, borderRadius: 10 } }}
      {...props}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
    : <code className={className} {...props} />
}