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
    <div>
      <Header />
      <main>
        <div className="container max-w-3xl mx-auto my-12 p-4">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;