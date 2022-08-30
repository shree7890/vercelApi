const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/", (req, res) => {
  res.json({
    message: "successfully",
    data: {
      name: "shreekanta",
      age: 343,
    },
  });
});
app.listen(port, () => {
  console.log(" server listen successfullly", port);
});
