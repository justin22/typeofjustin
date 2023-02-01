import Link from "next/link";

const ErrorPage: React.FC = () => (
  <div className="min-h-screen">
    <h1 className="text-4xl md:text-6xl tracking-wide font-normal md:font-normal mb-4 text-gray-700 dark:text-gray-200">
      Page not found
    </h1>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      The page you are looking for does not exist anymore, on never existed.
    </p>

    <p className="mt-4 hover:underline text-purple-600">
      <Link href={"/"}> Go to home page → </Link>
    </p>
  </div>
)

export default ErrorPage;