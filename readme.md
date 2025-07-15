# MERN Todo Application

A full-stack "Todo" list application built with the MERN stack (MongoDB, Express.js, React, Node.js). It includes user authentication, task management, and a clean, responsive user interface styled with Tailwind CSS.

## Features

-   **User Authentication**: Secure user registration and login system.
-   **JWT-Based Authorization**: Protected routes and user-specific data access using JSON Web Tokens.
-   **Password Management**: Includes a "Forgot Password" and "Reset Password" feature.
-   **Full CRUD Functionality for Tasks**:
    -   **Create**: Add new tasks with a title and description.
    -   **Read**: View all tasks associated with the logged-in user.
    -   **Update**: Mark tasks as complete or active.
    -   **Delete**: Remove tasks from the list.
-   **Task Filtering**: Easily filter tasks by their status (All, Active, Completed).
-   **Responsive Design**: A modern UI that works on various screen sizes, built with React and Tailwind CSS.
-   **State Management**: Utilizes React's Context API for efficient state management across components.
-   **Background Scheduler**: A scheduler is implemented to run background jobs (e.g., sending reminders or cleaning up tasks).

---

## Technology Stack

### Backend

-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Web application framework for Node.js.
-   **MongoDB**: NoSQL database for storing user and task data.
-   **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
-   **JSON Web Token (JWT)**: For creating access tokens for authentication.
-   **bcrypt**: Library for hashing user passwords.
-   **dotenv**: For managing environment variables.

### Frontend

-   **React**: JavaScript library for building user interfaces.
-   **React Router**: For client-side routing and navigation.
-   **Axios**: Promise-based HTTP client for making API requests to the backend.
-   **React Context API**: For managing global state (e.g., user token, tasks).
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/en/) (which includes npm)
-   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

---

## Installation & Setup

Follow these steps to get the application running locally.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mern-todo-app
```

### 2. Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the `backend` directory and add the following variables.

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```

    -   `PORT`: The port on which the backend server will run.
    -   `MONGO_URI`: Your connection string for your local or cloud-hosted MongoDB database.
    -   `JWT_SECRET`: A secret key for signing JSON Web Tokens.

4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server should now be running on `http://localhost:5000`.

### 3. Frontend Setup

1.  **Navigate to the frontend directory (from the root):**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the React development server:**
    ```bash
    npm start
    ```
    The application should now be running and open automatically in your web browser at `http://localhost:3000`.

---

## Project Structure

Here is an overview of the key files and directories in the project.

```
mern-todo-app/
├── backend/
│   ├── controllers/      # Handles the logic for each route (user, task, password).
│   ├── middleware/       # Contains middleware, like requireAuth.js for protecting routes.
│   ├── models/           # Defines the Mongoose schemas for users and tasks.
│   ├── routes/           # Defines the API endpoints (e.g., /api/users, /api/tasks).
│   ├── scheduler/        # Contains background job schedulers.
│   ├── .env              # Stores environment variables (must be created).
│   └── server.js         # The main entry point for the backend Express server.
│
└── frontend/
    ├── public/           # Contains the main index.html file and static assets.
    └── src/
        ├── Axios/        # Configures the Axios instance for API calls.
        ├── components/   # Reusable React components (Header, Task, Login, etc.).
        ├── context/      # React Context for global state management (tasks, auth token).
        ├── reducer/      # Reducer functions for use with the Context API.
        ├── App.js        # The main React component, handles routing.
        ├── index.js      # The entry point for the React application.
        └── tailwind.config.js # Configuration for Tailwind CSS.
```