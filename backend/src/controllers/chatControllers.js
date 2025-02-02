const axios = require("axios");
const ChatHistory = require("../models/ChatHistory");

exports.chat = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const response = await axios.post("http://127.0.0.1:5000/chatbot", { message });
    const chatResponse = response.data.response;

    const chat = new ChatHistory({ userId, message, response: chatResponse });
    await chat.save();

    res.json({ response: chatResponse });
  } catch (error) {
    res.status(500).json({ error: "AI Model Error" });
  }
};
