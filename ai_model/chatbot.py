from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
chatbot = pipeline("text-generation", model="gpt2")

@app.route("/chatbot", methods=["POST"])
def chat():
    data = request.json
    response = chatbot(data["message"], max_length=50)[0]["generated_text"]
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(port=5001, debug=True)
