const express = require("express");
const morgan = require("morgan");

const db = require("./db");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/campaign", async (req, res) => {
  const campaign = await db.select().from("campaign");
  res.json(campaign);
});

app.post("/campaign", async (req, res) => {
  const campaign = await db("campaign")
    .insert({
      campaign_name: req.body.campaign_name,
      createdby: req.body.campaign_body,
    })
    .returning("*");
  res.json(campaign);
});

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
