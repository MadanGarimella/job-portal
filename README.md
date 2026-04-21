# 🚀 Full Stack Job Portal & Recruitment System

A scalable full-stack job portal application that enables **candidates, recruiters, and administrators** to interact within a unified hiring ecosystem.

This platform supports job discovery, application tracking, and recruitment workflows with a clean, responsive UI and secure backend integration.

---

## 🌐 Live Demo

> *(Add deployed links here once ready)*
> Frontend: https://your-frontend-url
> Backend API: https://your-backend-url

---

## 📌 Features

### 👨‍💻 Candidate

* Browse and search jobs with filters
* View detailed job descriptions
* Apply to jobs with resume upload
* Track application status (Pending / Accepted / Rejected)
* Secure authentication (JWT-based)

### 🧑‍💼 Recruiter *(Planned / Extendable)*

* Post job listings
* Manage applicants
* Shortlist candidates

### 🛠 Admin *(Extendable)*

* Manage users and job listings
* Monitor platform activity

---

## 🏗 Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Spring Boot
* Spring Security
* JWT Authentication

### Database

* MySQL

---

## 📁 Project Structure

```
job-portal/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   └── utils/
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   └── models/
```

---

## 🔐 Authentication & Security

* JWT-based authentication system
* Protected routes for authorized access
* Token stored in localStorage
* Axios interceptor for secure API calls

---

## 🔄 Application Flow

```
Landing Page
   ↓
Browse Jobs
   ↓
Job Details
   ↓
Apply for Job
   ↓
Candidate Dashboard (Track Applications)
```

---

## 📡 API Endpoints

```
POST   /api/auth/login
POST   /api/auth/register

GET    /api/jobs
GET    /api/jobs/{id}

POST   /api/applications/apply/{jobId}
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 3. Backend Setup

```bash
cd backend
# Configure application.properties
# Add MySQL credentials

mvn spring-boot:run
```

---

## 🧪 Environment Variables

### Frontend

```
VITE_API_BASE_URL=http://localhost:8080/api
```

### Backend

```
spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
spring.datasource.username=root
spring.datasource.password=yourpassword
jwt.secret=your_secret_key
```

---

## 📸 Screenshots

> *(Add screenshots here for better impact)*

* Landing Page
* Job Listings
* Job Details
* Apply Page
* Dashboard

---

## 🚀 Future Enhancements

* Recruiter Dashboard (Job Posting System)
* Admin Panel
* Email Notifications
* Advanced Filtering (Skills, Salary)
* Resume Parsing
* Real-time application updates

---

## 💡 Key Highlights

* Designed scalable frontend architecture
* Implemented role-based system design
* Built end-to-end job application workflow
* Integrated REST APIs with secure authentication
* Focused on clean UI/UX and performance

---

## 🧠 Learnings

* Full-stack architecture design
* REST API integration with React
* JWT authentication handling
* State management and routing
* Real-world project structuring

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📬 Contact

**Your Name**
📧 [your-email@example.com](mailto:your-email@example.com)
🔗 LinkedIn: https://linkedin.com/in/your-profile

---

⭐ If you found this project helpful, consider giving it a star!
