// import required packages
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import weatherRoutes from "./routes/weatherRoutes.js";
import dogRoutes from "./routes/dogRoutes.js";
import travelRoutes from "./routes/travelRoutes.js";

// configure environment variables
const app = express();
app.use(cors());
config();

// define routes
app.get("/api", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/weather", weatherRoutes);
app.use('/api/images', express.static('images')); 
app.use("/api/dog", dogRoutes);
app.use("/api/travel", travelRoutes);

// start server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/api`);
});