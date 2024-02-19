import React from "react";
import { useState, useEffect } from "react";
import { useMovement } from "../hooks/useMovement";

const Dog = () => {
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dogWidth = 176;
  const dogHeight = 176;

  const [currentDog, setCurrentDog] = useState(0); // Index of current dog in dogData array

  const selectRandomDog = () => {
    const randomIndex = Math.floor(Math.random() * dogData.length);
    setCurrentDog(randomIndex);
  };

  const [position, setIsMoving] = useMovement(
    { top: 0, left: 0 },
    7,
    dogWidth,
    dogHeight,
    selectRandomDog
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsMoving(false); // Stop moving when hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsMoving(true); // Resume moving when not hovered
  };

  const isLeftSide = position.left <= window.innerWidth / 2;

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await fetch("/api/dog");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDogData(data);
        console.log(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Loading...</div>;
  }

  const getCachedDog = (id) => {
    const cachedDog = localStorage.getItem(id);
    if (!cachedDog) {
      return null;
    }
    return JSON.parse(cachedDog);
  };

  return (
    <>
      <div
        className="border-4 border-yellow-500 relative rounded-full overflow-hidden"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: dogWidth + "px",
          height: dogHeight + "px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={getCachedDog(dogData[currentDog].id) || dogData[currentDog].url}
          alt="Dog"
          className="object-cover w-full h-full"
        />
      </div>
      {isHovered && (
        <div
          className={`text-yellow-500 text-3xl font-sue-ellen font-extrabold absolute rounded-full p-2 z-10`}
          style={{
            top: position.top,
            left: isLeftSide
              ? position.left + dogWidth + "px"
              : position.left - dogWidth + "px",
          }}
        >
          {dogData[currentDog].text}
        </div>
      )}
    </>
  );
};

export default Dog;
