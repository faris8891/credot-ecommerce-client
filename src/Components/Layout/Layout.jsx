import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <div className="bg-light">
      <div>
        <Navbar />
      </div>
      <Outlet />
      <div>footer</div>
    </div>
  );
}

export default Layout;
