const express = require("express");
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
