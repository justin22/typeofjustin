import type { FC } from 'react';

export const Introduction: FC = () => (
  <div className="text-lg font-medium text-gray-800">
    <p className="text-gray-800 dark:text-gray-200 mb-6"> Hello, I&apos;m Justin</p>
    <p className="text-gray-800 dark:text-gray-200 leading-8">
      I&apos;m building{' '}
      <a
        href="https://www.sparrowdesk.com"
        target="_blank"
        rel="noreferrer"
        className="underline cursor-pointer font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 hover:dark:text-sky-400"
      >
        SparrowDesk
      </a>{' '}
      at SurveySparrow, passionate about UX and in the process of learning more
      about it.
    </p>
  </div>
);
