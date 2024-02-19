import React, { useState, useEffect } from "react";

const TravelImage = () => {
  const [travelImages, setTravelImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const locations = [
    "Montreal",
    "New York",
    "London",
    "Tokyo",
    "hongkong",
    "shanghai",
  ];

  useEffect(() => {
    const fetchTravelImages = async () => {
      try {
        const images = await Promise.all(
          locations.map(async (location) => {
            const response = await fetch(`/api/travel/${location}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return { location, image: data.image };
          })
        );
        setTravelImages(images);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTravelImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-darkBGColor text-white p-16 font-josefin-sans">
      <div className="flex flex-col items-start mt-24">
        <h1 className="text-5xl font-bold pb-4">Photography</h1>
        <p className="text-xl">
          I’m an avid traveller and I capture the best moments that I would love
          to cherish with the world.
        </p>
      </div>

      <div className="w-full border-t border-blueGreyColor mt-4 mb-16"></div>
      <div className="flex flex-row w-full mb-24">
        <div className="flex flex-wrap">
          {travelImages.map((travelImage, index) => (
            <div key={index} className="w-1/3 p-4">
              <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-md p-2">
                <p className="text-lg text-gray-700">{travelImage.location}</p>
                <img
                  src={travelImage.image}
                  alt={travelImage.location}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelImage;
