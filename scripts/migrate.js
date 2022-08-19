const db = require("../db");

(async () => {
  try {
    await db.schema.dropTableIfExists("campaign");
    await db.schema.withSchema("public").createTable("campaign", (table) => {
      table.increments("campaignId");
      table.string("campaign_name");
      table.string("createdby");
    });
    console.log("Created campaign table!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
