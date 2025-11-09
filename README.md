LinkedIn Clone - Full Stack Social Media Application

This project is a simplified LinkedIn-like social platform where users can sign up, log in, create posts, view posts from all users, and like posts.  
The goal of this assignment was to demonstrate complete end-to-end full stack development**, including frontend UI, backend API development, authentication, database integration, and cloud deployment.



Key Features

1. User Authentication
Secure Signup & Login system using Email + Password.
User session handled using localStorage.
Logged-in user's name is displayed on the top navigation bar.

2. Create & Share Posts
Users can create text-based posts. Each post includes:
User’s name
Post content
Timestamp

3. Global Public Feed
All users can view posts made by everyone.
Posts are displayed in reverse chronological order (latest first).

4. Like Feature (Bonus Implemented)
Each post has a like button.
Like count updates automatically.



🧠 System Architecture (High-Level Design)

Frontend handles UI + state management.
Backend handles API routing, authentication logic, and post operations.
MongoDB Atlas stores user & post data securely.


🛠️ Tech Stack

| Layer | Technology Used |
|------|----------------|
| Frontend | React.js, JavaScript, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Cloud) |
| Deployment (Frontend) | Vercel |
| Deployment (Backend) | Render |



🌐 Live Demo Links

| Service | URL |
|--------|-----|
| Frontend | https://linkdln-frontend.vercel.app |
| Backend | https://linkdln-backend.onrender.com |



Development Workflow (How I Built the Project)

1.Designed data models for Users and Posts in MongoDB.
2. Built secure authentication routes (`/auth/signup`, `/auth/login`).
3. Implemented Post APIs (`/post/create`, `/post/all`, `/post/like`).
4. Created React pages for Signup, Login, and Feed.
5. Used Axios to connect frontend with backend.
6. Enabled secure cross-origin communication via CORS.
7. Deployed:
   - Backend → Render
   - Frontend → Vercel
   - Database → MongoDB Atlas







