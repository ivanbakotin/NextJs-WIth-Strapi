import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }: any) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
