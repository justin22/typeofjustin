import Link from "next/link";

const Header = () => (
  <div className="p-4 container md:max-w-3xl mx-auto">
    <div className="group">
      <span className="group-hover:text-teal-600 text-xl text-blue-900 font-semibold">
        <Link href="/" passHref>
          Justin&apos;s Blog
        </Link>
      </span>
    </div>
  </div>
)

export default Header;