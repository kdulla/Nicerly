from flask import Flask
from flask import request
import nltk
from nltk.classify import NaiveBayesClassifier
from nltk.corpus import subjectivity
from nltk.sentiment import SentimentAnalyzer
from nltk.sentiment.util import *
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.tokenize import sent_tokenize
import threading

app = Flask(__name__)

doneDownload = False
def downloadData():
    global doneDownload
    nltk.download('all-corpora')
    doneDownload = True
threading.Thread(target=downloadData).start()

@app.route('/analyze')
def hello():
    if doneDownload:
        return sentScore(request.args.get('message'))
    return "Ha no"

def sentScore(text):
    total = 0
    for sentence in sent_tokenize(text):
        scores = SentimentIntensityAnalyzer().polarity_scores(sentence)
        neg = -6*scores["neg"]
        pos = scores["pos"]
        compound = scores["compound"]
        total += compound + neg + pos
    return str(total)