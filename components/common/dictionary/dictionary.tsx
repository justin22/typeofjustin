import * as Tooltip from '@radix-ui/react-tooltip';
import styles from './dictionary.module.css';

type DictionaryType = {
  word: string,
  explanation: string
}

export const Dictionary = ({
  word,
  explanation
}: DictionaryType) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className={styles.word}>
            {word}
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content} sideOffset={5}>
            <p className='text-purple-500 text-2xl'>{word}</p>
            {explanation}
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}