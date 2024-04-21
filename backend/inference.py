import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Load the dataset
data = pd.read_csv("train.csv")

# Preprocess the data
X = data["Text"]
y = data["Disease"]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the TfidfVectorizer
vectorizer = TfidfVectorizer()

# Fit and transform the training data
X_train_vectorized = vectorizer.fit_transform(X_train)

# Transform the testing data
X_test_vectorized = vectorizer.transform(X_test)

# Initialize the Logistic Regression model
model = LogisticRegression()

# Train the model
model.fit(X_train_vectorized, y_train)

# Evaluate the model on the testing data
accuracy = model.score(X_test_vectorized, y_test)
print(f"Accuracy: {accuracy}")

import pickle

# Save the vectorizer
with open("vectorizer.pkl", "wb") as file:
    pickle.dump(vectorizer, file)

# Save the model
with open("model.pkl", "wb") as file:
    pickle.dump(model, file)
