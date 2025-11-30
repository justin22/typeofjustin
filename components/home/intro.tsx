import Link from "next/link";

export function Introduction() {
  return (
    <div className="text-lg font-medium text-gray-800">
      <p className="text-gray-800 dark:text-gray-200 mb-6">
        {" "}
        Hello, I&apos;m Justin
      </p>

      <p className="text-gray-800 dark:text-gray-200 leading-8">
        I{" "}
        <Link href="/career">
          <a
            className="underline cursor-pointer font-medium text-sky-700 hover:text-sky-900
          dark:text-sky-300 hover:dark:text-sky-400"
          >
            work
          </a>
        </Link>{" "}
        at SurveySparrow, passionate about UX and in the process of learning
        more about it.
      </p>
    </div>
  );
}
