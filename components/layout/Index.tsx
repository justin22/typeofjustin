import { useEffect } from "react";
import Header from "./navbar";
import splitbee from '@splitbee/web';
import { Footer } from "./footer";

const Layout = ({ children }) => {

  useEffect(() => {
    splitbee.init({
      scriptUrl: "https://cdn.splitbee.io/sb.js",
      apiUrl: "https://hive.splitbee.io",
    })
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container max-w-3xl mx-auto p-4 py-14">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;