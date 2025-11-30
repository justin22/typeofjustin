import Header from "./navbar";
import { Footer } from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Header />
      <main>
        <div className="container max-w-3xl mx-auto p-4 py-14">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
