# Task Manager Application

This is a simple Task Manager application built with HTML, CSS, JavaScript (frontend), Node.js (backend), and MongoDB (database).

## Features

  1.Add Tasks:Create new tasks with titles and optional descriptions.
  2.View Tasks: Display all tasks in a list with their status.
  3.Update Status: Mark tasks as "Completed" or "Pending."
  4.Delete Tasks: Remove tasks from the list.
  5.Persistent Data: Uses MongoDB to store task data.
Technologies Used

Frontend:-->
    * HTML
    * CSS
    * JavaScript
Backend:-->
    * Node.js
    * Express.js
Database:-->
    * MongoDB
Prerequisites
    * Node.js and npm (Node Package Manager)
    * MongoDB
##Setup
    * Install dependencies:
        ```bash
        npm install
        ```
    * Start MongoDB: Ensure your MongoDB server is running.
    * Run the backend server:
        ```bash
        node server.js
        ```
    * Frontend Setup:
       Navigate to the frontend directory:
       Open `index.html` in your web browser.

  ##Usage
      1.Add a Task: Enter a task title and description in the form and click "Add Task."
      2.Update Status: Click the "Complete" or "Pending" button next to a task to change its status.
      3.Delete a Task: Click the "Delete" button to remove a task.

  ##Optional Enhancements
       1.Styling: Improve the UI with Bootstrap or Tailwind CSS.
       2.Form Validation: Add client-side validation to the task form.
       3.Deployment: Deploy the frontend and backend to platforms like Vercel/Netlify and Render/Railway, respectively.
       4.Testing: Use Postman to test the backend API endpoints.
