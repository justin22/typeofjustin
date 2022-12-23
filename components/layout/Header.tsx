import Link from "next/link";

const Header = () => (
  <div className="p-4 container md:max-w-3xl mx-auto">
    <div className="group">
      <span className="group-hover:text-teal-600 text-md dark:text-gray-50 dark:group-hover:text-teal-300">
        <Link href="/" passHref>
          typeof just.in
        </Link>
      </span>
      <span className="group-hover:text-teal-600 dark:group-hover:text-teal-300 
        ml-1
        invisible group-hover:visible group-hover:animate-ping" 
        title="hooman">
        = hooman
      </span>
    </div>
  </div>
)

export default Header;