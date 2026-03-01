import type { FC } from 'react';

export const Navbar: FC = () => (
  <div className="p-4 container md:max-w-3xl mx-auto">
    <div className="group">
      <span className="hover:text-purple-700 text-xl text-blue-900 dark:text-white dark:hover:text-gray-400 font-semibold">
        <a href="/">Justin</a>
      </span>
    </div>
  </div>
);
