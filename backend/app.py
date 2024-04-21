from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)  


with open('vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)

with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/', methods=['POST'])
@cross_origin()  
def predict():

    data = request.get_json(force=True)

    if 'text' not in data:
        return jsonify({"error": "Missing 'text' field in request"}), 400

    # Vectorize the input text
    text_vectorized = vectorizer.transform([data['text']])

    # Make prediction
    prediction = model.predict(text_vectorized)

    # Send back the prediction
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
