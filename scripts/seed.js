const db = require("../db");

(async () => {
  try {
    await db("campaign").insert({
      campaign_name: "Windows July2022",
      createdby: "srikanth",
    });
    await db("campaign").insert({
      campaign_name: "Linux August2022",
      createdby: "shyamala",
    });
    console.log("Added dummy users!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
