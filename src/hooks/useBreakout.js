import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export const useBreakout = () => {
  const { width } = useWindowSize();
  const [screenType, setScreenType] = useState("");
  useEffect(() => {
    if (width <= 426) setScreenType("mobile");
    else if (width <= 768) setScreenType("tablet");
    else if (width <= 1024) setScreenType("desktop");
    else setScreenType("desktop-l");
  }, [width]);
  return screenType;
};
