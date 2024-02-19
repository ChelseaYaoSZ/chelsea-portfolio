import { useEffect, useRef, useState } from "react";

const useTypingEffect = (textsToType, interKeyStrokeDurationInMs) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    if (
      currentPosition === textsToType[currentTextIndex].length + 1 &&
      !isDeleting.current
    ) {
      // Start deleting
      isDeleting.current = true;
    } else if (currentPosition === 0 && isDeleting.current) {
      // Move to the next text after deletion is complete
      isDeleting.current = false;
      setCurrentTextIndex((index) => (index + 1) % textsToType.length);
    }

    const intervalId = setInterval(() => {
      setCurrentPosition((current) => current + (isDeleting.current ? -1 : 1));
    }, interKeyStrokeDurationInMs);

    return () => clearInterval(intervalId);
  }, [
    interKeyStrokeDurationInMs,
    textsToType,
    currentTextIndex,
    currentPosition,
  ]);

  return textsToType[currentTextIndex].substring(0, currentPosition);
};

export { useTypingEffect };
