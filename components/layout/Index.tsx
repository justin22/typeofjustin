import Header from "./Header";

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>
      <div className="container max-w-3xl mx-auto my-12 p-4">
        {children}
      </div>
    </main>
  </div>
)

export default Layout;