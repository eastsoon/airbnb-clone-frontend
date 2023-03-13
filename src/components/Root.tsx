import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <h1>
      from Root
      <Outlet />
    </h1>
  );
}
