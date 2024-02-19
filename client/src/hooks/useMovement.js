// useMovement.js
import { useState, useEffect } from "react";

const useMovement = (initialPosition, speed, width, height, onEdge) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    if (!isMoving) return;

    const move = () => {
      setPosition((prevPosition) => {
        let newTop = prevPosition.top + direction.y * speed;
        let newLeft = prevPosition.left + direction.x * speed;
        let newDirection = { ...direction };

        if (newTop <= 0 || newTop >= window.innerHeight - height) {
          newDirection.y = -direction.y;
          onEdge && onEdge();
        }
        if (newLeft <= 0 || newLeft >= window.innerWidth - width) {
          newDirection.x = -direction.x;
          onEdge && onEdge();
        }
        setDirection(newDirection);

        return {
          top: Math.max(0, Math.min(newTop, window.innerHeight - height)),
          left: Math.max(0, Math.min(newLeft, window.innerWidth - width)),
        };
      });
    };

    const intervalId = setInterval(move, 50);

    return () => clearInterval(intervalId);
  }, [direction, isMoving, speed, width, height, onEdge]);

  return [position, setIsMoving];
};

export { useMovement };
