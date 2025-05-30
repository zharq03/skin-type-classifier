from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import joblib
import cv2
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load model
feature_extractor = tf.keras.models.load_model('mobilenet_feature_extractor.h5')
svm = joblib.load('svm_classifier.pkl')

# Label kelas
class_labels = ['Dry', 'Normal', 'Oily']

def preprocess_image(image_path):
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError("Gagal membaca gambar")
    img = cv2.resize(img, (224, 224))
    img = img / 255.0  # Normalisasi
    img = np.expand_dims(img, axis=0)  # Tambah dimensi batch
    return img

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'Tidak ada file gambar yang diunggah'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'Pilih file gambar terlebih dahulu'}), 400
    
    # Simpan file sementara
    file_path = 'temp.jpg'
    file.save(file_path)
    
    try:
        # Preprocess dan ekstrak fitur
        img = preprocess_image(file_path)
        features = feature_extractor.predict(img, verbose=0)
        
        # Prediksi dengan SVM
        pred = svm.predict(features)
        result = class_labels[pred[0]]
        
        # Hapus file sementara
        os.remove(file_path)
        
        return jsonify({'prediction': result})
    except Exception as e:
        os.remove(file_path)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)