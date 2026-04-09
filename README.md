# AI Study Assistant 📚🤖

AI Study Assistant is a full-stack web application that helps students understand their study materials using Artificial Intelligence. Students can upload notes, ask questions, generate quizzes, and get summaries using **Google Gemini AI**.

This project uses **React for the frontend** and **Spring Boot for the backend**.

---

## 🚀 Features

* 📄 Upload study materials (PDF / text)
* 💬 Ask questions about uploaded notes
* 🧠 AI explains difficult concepts in simple language
* 📝 Automatically generate quiz questions
* 📚 Generate summaries of notes
* 💾 Store notes and chat history

---

## 🏗️ Project Structure

```
ai-study-assistant
│
├── frontend        # React application
│
├── backend         # Spring Boot REST API
│
├── docs            # Architecture diagrams and documentation
│
└── README.md
```

---

## ⚙️ Technology Stack

### Frontend

* React
* HTML / CSS / JavaScript
* Axios / Fetch API

### Backend

* Java
* Spring Boot
* Spring Data JPA

### Database

* MySQL

### AI Integration

* Google Gemini API

---

## 🧠 System Architecture

```
User
  ↓
React Frontend
  ↓
Spring Boot Backend
  ↓
Google Gemini API
  ↓
MySQL Database
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/ai-study-assistant.git
cd ai-study-assistant
```

---

### 2️⃣ Run Backend (Spring Boot)

```
cd backend
./mvnw spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### 3️⃣ Run Frontend (React)

Open another terminal:

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend project.

Example:

```
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 📊 Future Improvements

* 📈 Study progress dashboard
* 📱 Mobile responsive UI
* 📚 AI flashcards for learning
* 📂 Multiple file uploads
* 🧠 Personalized study recommendations

---

## 👨‍💻 Author

Virusan Thavanathan
Computer Science Engineering Student

---

## 📄 License

This project is for educational and learning purposes.
