import { useEffect, useRef, useState } from "react";
import { getMousePositionInElement } from "../helpers";

export const useMousePositionInElement = (defaultValue) => {
  const [mousePosition, setMousePosition] = useState(defaultValue);
  const elementRef = useRef(null);
  const handleMouseMoveOrLeave = (e) => {
    setMousePosition(getMousePositionInElement(e))
  };
  useEffect(() => {
      if (elementRef.current) {
          elementRef.current.addEventListener('mousemove', handleMouseMoveOrLeave);
          elementRef.current.addEventListener('mouseleave', handleMouseMoveOrLeave);
      }
    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('mousemove', handleMouseMoveOrLeave);
        elementRef.current.removeEventListener('mouseleave', handleMouseMoveOrLeave);
      }
    }
  }, []);
  return {mousePosition, elementRef};
};
