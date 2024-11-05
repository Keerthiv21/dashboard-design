const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const dbConfig = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
