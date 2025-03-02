from textblob import TextBlob

def analyze_sentiment(text):
    sentiment_score = TextBlob(text).sentiment.polarity
    return "positive" if sentiment_score > 0 else "negative" if sentiment_score < 0 else "neutral"
