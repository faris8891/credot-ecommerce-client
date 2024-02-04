import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sitemap from "../Footer/Sitemap";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="bg-light">
      <div>
        <Navbar />
      </div>
      <div className="min-vh-100">
        <Outlet />
      </div>
      <div>
        <Sitemap />
        <div className="bg-silver mt-4 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
