import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommingSoon, MainLayout } from "./components";
import { HomePage } from "./pages";
import { Worker } from "@react-pdf-viewer/core";
import "./App.scss";
import { useLocalStorage, useWindowSize } from "./hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18n";
import { useTranslation } from "react-i18next";
import { AppContext } from "./context";

export default function App() {
  const { t, i18n } = useTranslation();
  const { width } = useWindowSize();

  return (
    <BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <AppContext.Provider value={{ t, i18n }}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/secret"
                element={
                  <div>
                    Sang cho anh ôm đi ngủ đi:v Chỉ ôm đi ngủ với hít hít thôi,
                    thật đấy:v
                  </div>
                }
              />
            </Routes>
          </MainLayout>
        </AppContext.Provider>
      </Worker>
    </BrowserRouter>
  );
}
