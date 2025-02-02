import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:5000/api/chat", { message });
    setResponses([...responses, { user: message, bot: res.data.response }]);
    setMessage("");
  };

  return (
    <div>
      <h2>EmotionEcho Chatbot</h2>
      <div>
        {responses.map((res, index) => (
          <p key={index}><strong>User:</strong> {res.user} <br /> <strong>Bot:</strong> {res.bot}</p>
        ))}
      </div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
