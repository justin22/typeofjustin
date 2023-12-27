import { useEffect } from "react";
import Header from "./Header";
import splitbee from '@splitbee/web';

const Layout = ({ children }) => {

  useEffect(() => {
    splitbee.init({
      scriptUrl: "https://cdn.splitbee.io/sb.js",
      apiUrl: "https://hive.splitbee.io",
    })
  }, []);

  return (
    <div className="min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-fuchsia-900 to-purple-200">
      <Header />
      <main>
        <div className="container max-w-3xl mx-auto p-4 py-14">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;