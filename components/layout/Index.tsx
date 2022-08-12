import Header from "./Header.tsx";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      <div className="container max-w-4xl mx-auto my-12 p-4">
        {children}
      </div>
    </main>
  </>
)

export default Layout;