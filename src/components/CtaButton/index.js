import { Link } from "react-router-dom";
import "./index.scss";

export const CtaButton = ({ to, children, customClassName }) => {
  return (
    <Link to={to} className={customClassName || "cta-me-btn"}>
      {children}
    </Link>
  );
};