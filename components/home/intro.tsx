import Link from "next/link";

export function Introduction() {
  return (
    <div className="text-lg font-medium text-gray-800">
      <p className="text-gray-800 mb-6"> Hello, I&apos;m Justin</p>

      <p className="text-gray-800 leading-8">
        I <Link href="/career"><a className="underline decoration-sky-500/30 cursor-pointer font-medium hover:decoration-pink-500/30 transition-all duration-150">work</a></Link> at <a className="underline decoration-sky-500/30 cursor-pointer font-medium hover:decoration-pink-500/30 transition-all duration-150" href="https://www.sparrowdesk.com/?ref=typeofjust.in" target="_blank">SparrowDesk</a>,  passionate about UX and in the process of learning more about it.
      </p>
    </div>
  )
}
