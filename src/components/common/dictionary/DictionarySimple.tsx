import type { FC } from 'react';

type DictionaryProps = {
  word: string;
  explanation: React.ReactNode;
};

export const DictionarySimple: FC<DictionaryProps> = ({ word }) => (
  <span className="text-purple-500 font-semibold" title={String(word)}>
    {word}
  </span>
);
