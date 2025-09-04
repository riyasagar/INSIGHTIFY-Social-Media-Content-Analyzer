# INSIGHTIFY - Social Media Content Analyzer

**INSIGHTIFY** is a powerful web application built with **React + Vite** that helps users analyze and optimize social media content before sharing. Its goal is to simplify content evaluation while providing meaningful insights to improve audience engagement.

The app allows content to be uploaded easily through a **drag-and-drop interface** or standard file selection, making it user-friendly and flexible.  

It supports multiple file formats:  
- **Images** – Text is extracted using **Tesseract.js (OCR)**.  
- **PDF files** – Text is automatically parsed using **PDF.js** or custom parsing utilities.  

Once the text is extracted, the app performs **sentiment analysis** to determine tone (positive, negative, or neutral) and generates **custom recommendations** to improve clarity, engagement, and overall social media impact.  

By combining OCR, PDF parsing, sentiment insights, and actionable suggestions, INSIGHTIFY equips content creators with the tools they need to craft compelling posts that resonate with their audience.

---

## 🌐 Live Demo

Access the live deployed app here:  
[INSIGHTIFY Live](https://insightify-social-media-content-analyzer-bqooxt0gu.vercel.app)


---

## 📂 GitHub Repository

Explore the source code here:  
[INSIGHTIFY GitHub](https://github.com/riyasagar/INSIGHTIFY-Social-Media-Content-Analyzer)

---

## 🛠️ Tech Stack

- **Frontend:** React + CSS  
- **OCR:** Tesseract.js  
- **File Parsing:** PDF.js / custom parsing utilities  
- **Analysis:** Sentiment analysis + content improvement suggestions  
- **Other Tools:** Vite  

---

## 💻 Installation

1. **Clone the repository**

```bash
git clone https://github.com/riyasagar/INSIGHTIFY-Social-Media-Content-Analyzer.git
cd INSIGHTIFY-Social-Media-Content-Analyzer
```
2. **Install dependencies**

npm install


3. **Run the development server**

npm run dev


4. Open http://localhost:5173 in your browser.

## ⚙️ Deployment on Vercel

1. Sign in to Vercel and import your GitHub repository.

2. Use the following settings:

- Framework Preset: Vite

- Install Command: npm install

- Build Command: npm run build

- Output Directory: dist

3. Click Deploy. Your project will be live with a URL like:

https://insightify-social-media-content-analyzer.vercel.app


## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
