import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 3000;

app.use("/", async (req, res) => {
  const url = "https://postmates.com/_p/api/getFeedV1?localeCode=en-US";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
