from flask import Flask, jsonify, request
from textblob import TextBlob

app = Flask(__name__)

# Default route to check if the server is running
@app.route('/')
def home():
    return jsonify({"message": "EmotionEcho AI Server is running"}), 200

# Sentiment analysis endpoint
@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data.get('text', '')
    
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    sentiment_score = TextBlob(text).sentiment.polarity
    sentiment = "positive" if sentiment_score > 0 else "negative" if sentiment_score < 0 else "neutral"
    
    return jsonify({"sentiment": sentiment, "score": sentiment_score})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
