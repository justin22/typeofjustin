import Link from "next/link";

const ErrorPage: React.FC  = () => (
  <div className="min-h-screen">
    <h1 className="text-4xl"> Page not found </h1>
    <p className="mt-4">
      The page you are looking for does not exist anymore, on never existed.
    </p>

    <p className="mt-4 hover:underline text-purple-600">
      <Link href={"/"}> Go to home page → </Link>
    </p>
  </div>
)

export default ErrorPage;