import Link from "next/link";

const Header = () => (
  <div className="p-4 container md:max-w-3xl mx-auto">
    <div className="group">
      <span className="group-hover:text-teal-600 text-md text-gray-600 dark:text-gray-400 dark:group-hover:text-teal-300 font-semibold">
        <Link href="/" passHref>
          typeof just.in
        </Link>
      </span>
    </div>
  </div>
)

export default Header;