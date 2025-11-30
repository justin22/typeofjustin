import Link from "next/link";

const Header = () => (
  <div className="p-4 container md:max-w-3xl mx-auto">
    <div className="group">
      <span className="hover:text-purple-700 text-xl text-blue-900 dark:text-white dark:hover:text-gray-400 font-semibold">
        <Link href="/" passHref>
          Justin
        </Link>
      </span>
    </div>
  </div>
);

export default Header;
