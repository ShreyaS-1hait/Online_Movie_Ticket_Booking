# 🧠 Multi-Modal AI for Lung Cancer Diagnosis

## 📌 Overview
This project presents a multi-modal machine learning system designed to improve lung cancer diagnosis by integrating medical imaging data with structured clinical patient data. The system leverages deep learning techniques to extract meaningful features and combines multiple data sources to enhance prediction accuracy.

---

## 🎯 Objective
To build an intelligent diagnostic system that:
- Utilizes **medical imaging (CT/X-ray)** for feature extraction  
- Incorporates **clinical data** for additional context  
- Combines both modalities to improve diagnostic performance  

---

## 🏗️ System Architecture

<img width="950" height="1442" alt="model_architecture" src="https://github.com/user-attachments/assets/6f21db2e-c179-4001-acf6-9d3874497730" />

---

## ⚙️ Methodology

### 1. Data Processing
- Image data is preprocessed (resizing, normalization)
- Clinical data is cleaned and encoded

### 2. Model Components
- **CNN (Convolutional Neural Network)** for image feature extraction  
- **MLP (Multi-Layer Perceptron)** for clinical data processing  

### 3. Multi-Modal Fusion
- Extracted features from both models are combined  
- Fusion improves the model's ability to learn complex patterns  

---

## 📊 Results

| Metric        | Value |
|--------------|------|
| Accuracy     | 87%  |
| Precision    | 85%  |
| Recall       | 83%  |

*(Replace with your actual results if available)*

---

## 🛠 Tech Stack

- Python  
- TensorFlow / PyTorch  
- NumPy, Pandas  
- OpenCV  

---

## 📷 Visual Outputs

<img width="1110" height="880" alt="confusion_matrix" src="https://github.com/user-attachments/assets/2e7216b5-8997-4d25-b85c-ac48b80aa220" />

<img width="2084" height="732" alt="training_results" src="https://github.com/user-attachments/assets/b3ae4c9f-211a-4d67-b1cb-426841a13684" />

<img width="1116" height="403" alt="Sample CT Scan Images" src="https://github.com/user-attachments/assets/e30b0d78-9932-4388-84df-a9950f61d08c" />

<img width="1394" height="312" alt="Streamlit Dashboard-1" src="https://github.com/user-attachments/assets/5cd919fa-80f7-40d4-a7fb-d8f3a08108ce" />


---

## 🚀 How to Run

```bash
# Clone repository
git clone https://github.com/ShreyaS-1hait/Multi-Modal-AI-for-Lung-Cancer-Diagnosis-Imaging-Clinical-Data-

# Navigate to project
cd Multi-Modal-AI-for-Lung-Cancer-Diagnosis-Imaging-Clinical-Data-

# Install dependencies
pip install -r requirements.txt

# Run the model
python main.py
