import express from "express";
import { config } from "dotenv";
config();

const router = express.Router();

const baseUrl = process.env.BASE_URL || "http://localhost:5001";
const dogData = [
  { id: 1, text: "Soooooo bored...", url: `${baseUrl}/api/images/bored.jpeg` },
  { id: 2, text: "It's a Baaaall !!!", url: `${baseUrl}/api/images/ball.png` },
  { id: 3, text: "Let's GOOOOO!!!", url: `${baseUrl}/api/images/brave.png` },
  { id: 4, text: "You still see me?", url: `${baseUrl}/api/images/canYouSeeMe.jpeg` },
  { id: 5, text: "Soooooo Cooooool~", url: `${baseUrl}/api/images/car.jpeg` },
  { id: 6, text: "PLAY PLAY PLAY !!!", url: `${baseUrl}/api/images/comePlay.png` },
  { id: 7, text: "Emmm, Yammmy!!!", url: `${baseUrl}/api/images/eat.png` },
  { id: 8, text: "Hey! Meet my friend~", url: `${baseUrl}/api/images/friend.jpeg` },
  { id: 9, text: "King Of the World!", url: `${baseUrl}/api/images/king.jpeg` },
  { id: 10, text: "Okay, you're right.", url: `${baseUrl}/api/images/lookAt.png` },
  { id: 11, text: "Sooooo, Whaaaaat?!", url: `${baseUrl}/api/images/muddy.png` },
  { id: 12, text: "LOOK AT ME!!!!!", url: `${baseUrl}/api/images/sea.jpeg` },
  { id: 13, text: "Emmmm, who are you?", url: `${baseUrl}/api/images/whoAreYou.jpeg` },
];

router.route("/").get(async (req, res) => {
  try {
    res.send(dogData);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const dog = dogData.find((dog) => dog.id === parseInt(req.params.id));
    if (!dog) {
      res.status(404).send("Dog not found");
    }
    res.send(dog);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
