import Link from "next/link";

const Header = () => (
  <div className="p-4 container md:max-w-4xl mx-auto">
    <div className="group">
      <span className="group-hover:text-purple-600 text-md">
        <Link href="/" passHref>
          typeof just.in
        </Link>
      </span>
      <span className="invisible ml-1 group-hover:visible opacity-0 group-hover:opacity-100 transition-all delay-100 ease-in-out" title="programmer">
        👨‍💻
      </span>
    </div>
  </div>
)

export default Header;