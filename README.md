# TaskFlow – MERN Stack Task Management System

TaskFlow is a task management application currently under development using the MERN stack. It aims to help users organize, manage, and track their daily tasks efficiently.

The project focuses on secure authentication, task management, and well-structured backend development.

## 🚀 Technologies Used

- **MongoDB** – Database
- **Express.js** – Backend framework
- **React.js** – Frontend library
- **Node.js** – Runtime environment
- **Redis** – Token blacklisting
- **JWT** – Authentication
- **Mongoose** – MongoDB object modeling
- **Postman** – API testing

## ✨ Features Implemented

### Authentication
- User Registration
- User Login
- JWT-based Authentication
- HTTP-only Cookie Management
- Secure Logout using Redis Token Blacklisting

### Task Management
- Create Tasks
- Get All Tasks
- Get Single Task
- Update Tasks
- Delete Tasks
- Update Task Status
- Task Priority Management
- Due Date Management

### Search & Filtering
- Search Tasks by Title
- Filter Tasks by Status

### API Validation & Error Handling
- Task ID Validation
- Search Keyword Validation
- Task Status Validation
- Error Responses for Invalid Requests

## 📁 Project Structure

```text
TaskFlow/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   │   ├── auth/
│   │   │   ├── health/
│   │   │   ├── user/
│   │   │   └── task/
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AmnaSiddiqui-124/TaskFlow-MERN.git
```

### 2. Navigate to Backend

```bash
cd TaskFlow/backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend folder and configure your MongoDB, JWT, and Redis credentials.

**Never upload your actual `.env` file to GitHub.**

### 5. Run the Backend

```bash
npm run dev
```

Use the development command configured in your backend `package.json`.

## 🔗 Local API Base URL

The backend runs locally at:

http://localhost:3000/api

Note: This URL is for local development and is not publicly accessible.

### Task API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/tasks` | Create a task |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:taskId` | Get single task |
| PATCH | `/tasks/:taskId` | Update a task |
| DELETE | `/tasks/:taskId` | Delete a task |
| PATCH | `/tasks/:taskId/status` | Update task status |
| GET | `/tasks/search?search=React` | Search tasks |
| GET | `/tasks/filter?status=completed` | Filter tasks |

**Note:** Task endpoints require authentication.

## 📌 Development Status

- [x] Backend Authentication
- [x] JWT & Redis Integration
- [x] Task CRUD Operations
- [x] Task Search & Filtering
- [x] API Validation & Error Handling
- [ ] Dashboard APIs
- [ ] Frontend Development
- [ ] Frontend & Backend Integration

## 🎯 Project Goal

The goal of TaskFlow is to build a complete, secure, and user-friendly task management application while applying practical full-stack development concepts.

## 👨‍💻 Author

Developed as a personal project to strengthen practical MERN Stack development skills.

**TaskFlow – Organize Your Work. Manage Your Tasks.**
