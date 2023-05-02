import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "src/context";
import { LanguageSelect } from "../LanguageSelect";
import "./index.scss";

export const NavBarDesk = () => {
  const { t } = useContext(AppContext);
  const navLinkClassName = ({ isActive }) => {
    return `menu-item ${isActive ? "active" : ""}`;
  };
  return (
    <div className="nav-bar-desk">
      <Link to="/" className="logo">
        nklm
      </Link>
      <div className="menu">
        <NavLink to="/" className={navLinkClassName}>
          {t("Home")}
        </NavLink>
        <NavLink to="/portfolio" className={navLinkClassName}>
          {t("Portfolio")}
        </NavLink>
        <NavLink to="/blog" className={navLinkClassName}>
          {t("Blog")}
        </NavLink>
        <NavLink to="/squiggly" className={navLinkClassName}>
          {t("Squiggly")}
        </NavLink>
        <NavLink to="/about" className={navLinkClassName}>
          {t("About nklm")}
        </NavLink>
        <LanguageSelect />
      </div>
    </div>
  );
};
