# 🛒 Express Shopping Starter

A starter project using Node.js and Express to build the foundation of a simple shopping app.

## 🚀 Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/guy-ar/02-node-express-starting-project.git
   cd 02-node-express-starting-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node app.js
   ```
   
   The app runs on: http://localhost:3000

---

## 📁 Project Structure

```
02-node-express-starting-project
├── app.js         # Entry point: creates and starts the Express server
├── routes.js      # Defines HTTP routes and request handlers
├── views/         # (Optional) for template files (e.g., EJS, Pug)
├── public/        # (Optional) for static assets like CSS & JS
└── package.json   # Project metadata + dependencies
```

---


## 🔧 Features

- **Simple Routing with Express**
  - Handles `GET /` to display an HTML form.
  - Handles `POST /message` to process form submissions.

- **Form Handling and File Storage**
  - User input from the form is captured using standard Express request handling.
  - The submitted data is written to a file (`message.txt`) on the local filesystem, simulating basic data persistence.

- **Redirection**
  - After successfully writing the data, the user is redirected back to the homepage using an HTTP `302` response.

- **HTML Response**
  - If the user navigates to any other path, a default HTML page is served with a simple greeting message.

These features demonstrate basic concepts of backend development such as handling HTTP methods, parsing request data, managing file I/O, and sending structured HTML responses.

---

## 🛠 What You Can Do

- 💾 **Store shop data**: Capture item details like name and price using form inputs, similar to how `/message` submissions work.
- 🧩 **Add dynamic routes**: Support routes like `/products`, `/cart`, or `/checkout`.
- 🗃 **Integrate templates**: Use Express view engines (like EJS or Pug) to serve dynamic HTML.
- ⚙️ **Enhance file storage**: Instead of appending to a text file, use JSON or databases for better data management.

---

## 📚 Learning Resources

- Step-by-step guide to creating an Express app with routes and middleware
- Best practices for setting up a clean Express project structure
- Based on "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)" created by Maximilian Schwarzmüller
---

## ✅ Next Steps

1. **Convert `message.txt` to JSON format**
2. **Implement a `/products` route** that serves a list of items
3. **Add POST route to `/cart`** to simulate adding items to a shopping cart
4. **Persist data** using file storage or a simple database (e.g., SQLite or MongoDB)


---

## 🏁 Summary

This lightweight Express starter is perfect for learning and experimenting. It shows:

- How to spin up an HTTP server using Express
- How to define GET and POST routes
- How to handle form data and basic file operations

It sets the stage for building out a simple shop with item listing, cart functionality, and persistent storage—all you have to do is build on top of it! Enjoy 🎉
