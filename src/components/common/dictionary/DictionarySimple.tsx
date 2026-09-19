import { useId, type FC } from 'react';

type DictionaryProps = {
  word: string;
  explanation: React.ReactNode;
};

export const DictionarySimple: FC<DictionaryProps> = ({ word, explanation }) => {
  const definitionId = useId();

  return (
    <span
      className="dictionary-term not-prose"
      tabIndex={0}
      aria-describedby={definitionId}
    >
      <span className="dictionary-word">{word}</span>
      <span className="dictionary-definition" id={definitionId} role="tooltip">
        <span className="dictionary-definition-word">{word}</span>
        <span>{explanation}</span>
      </span>
    </span>
  );
};
