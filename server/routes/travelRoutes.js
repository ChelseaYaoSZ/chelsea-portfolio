import express from "express";
import { config } from "dotenv";
config();

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    res.send("this is travel routes");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.route("/:location").get(async (req, res) => {
  try {
    const location = req.params.location;
    const travelImages = await fetchTravelImages(location);
    // const randomIndex = Math.floor(Math.random() * travelImages.length);
    const randomImage = travelImages[0].urls.small;
    console.log(randomImage);
    res.send({ location: location, image: randomImage });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const fetchTravelImages = async (location) => {
  const accessKey = "uz-yevSAVnI6N08cfwTuQeFTZ3k7hYlGUpTcONB5FKw"; // Replace with your Unsplash access key
  const url = `https://api.unsplash.com/search/photos?query=${location}&client_id=${accessKey}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; // An array of image objects
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

export default router;
