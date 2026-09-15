import TopBanner from "./TopBanner/TopBanner";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;