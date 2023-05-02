import { NavBar } from "..";
import { Footer } from "..";
import { useScrollTopOnChangeRoute } from "@hooks";

export const MainLayout = ({ children }) => {
  useScrollTopOnChangeRoute();

  return (
    <div>
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};
