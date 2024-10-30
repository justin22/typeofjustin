export function Footer() {
  return (
    <div className="fixed right-4 bottom-4 rounded-2xl p-1 border border-gray-200 bg-white hover: hover:border-gray-300 hover:shadow-sm transition-all duration-100 ease-linear">
      <div className="flex gap-6 px-2 py-1">
        <a className="text-gray-600 text-xs hover:text-blue-600" href="https://twitter.com/georgemjustin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/georgejustin22/" className="text-gray-600 text-xs hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
      </div>
    </div>
  )
}