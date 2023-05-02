import { useLocalStorage } from "@hooks";
import { useContext, useEffect } from "react";
import { AppContext } from "src/context";
import "./index.scss";

export const LanguageSelect = () => {
  const { i18n } = useContext(AppContext);
  const [currentLanguage, setCurrentLangguage] = useLocalStorage(
    "nklm-lang",
    "en"
  );
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);
  const toggleLanguage = () => {
    setCurrentLangguage(currentLanguage === "en" ? "vi" : "en");
  };
  return (
    <div className="language-select" onClick={toggleLanguage}>
      <i class="fas fa-globe-asia"></i>
      {currentLanguage === "vi" ? "VN" : "EN"}
    </div>
  );
};
