import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>navbar</div>
      <Outlet />
      <div>footer</div>
    </div>
  );
}

export default Layout;
