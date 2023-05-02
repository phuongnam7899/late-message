import { useEffect, useRef, useState } from "react";

export const TypeWriter = ({ text, speed = 250, stopPoints }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [waitTimeCountDown, setWaitTimeCountDown] = useState(0);
  const intervalRef = useRef();
  const getDisplayedString = () => {
    return text.substring(0, currentIndex);
  };
  const [textDisplayed, setTextDisplayed] = useState(getDisplayedString());
  useEffect(() => {
    setTextDisplayed(getDisplayedString());
  }, [currentIndex]);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (waitTimeCountDown === 0) {
        setCurrentIndex((current) => {
          const nextIndex = current + 1;
          if (nextIndex === text.length) clearInterval(intervalRef.current);
          const stopPointIndexFound = stopPoints.findIndex(
            (stopPoint) => stopPoint.index === nextIndex
          );
          if (stopPointIndexFound !== -1)
            setWaitTimeCountDown(stopPoints[stopPointIndexFound].stopTime);
          return nextIndex;
        });
      } else {
        setWaitTimeCountDown((current) => current - 1);
      }
    }, speed);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [waitTimeCountDown]);
  return (
    <>
      {textDisplayed}
      {currentIndex === text.length ? "" : "_"}
    </>
  );
};
