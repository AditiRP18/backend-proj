# backend-proj

📌 PROJECT OVERVIEW

This is a backend API built using Node.js, Express.js, and MongoDB for user authentication and profile management. It provides endpoints for user registration, login, profile retrieval, and updates.

🚀 Features

1) User authentication with JWT

2) Secure password hashing using bcrypt

3) MongoDB for database storage

4) Middleware-based authentication

5) RESTful API endpoints

🛠 TECH STACK

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token)

Middleware: Express.js


🔧 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/AditiRP18/backend-proj.git

```
cd backend-proj

```

2️⃣ Install Dependencies

```
npm install

```

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Replace your_mongodb_connection_string with your actual MongoDB connection URI.

4️⃣ Start the Server

```
npm start
```

The server will run on http://localhost:3000.

📡 API Endpoints

🔹 Authentication Routes

Method

Endpoint

Description

POST

/api/users/register

Register a user

POST

/api/users/login

Login a user

📌 Example Request Body for Registration
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "bio": "Software Developer"
}
```

🔹 Protected User Routes (Requires Authorization)

Method

Endpoint

Description

GET

/api/users/profile

Get user profile

PUT

/api/users/profile

Update user profile

📌 Authorization Header Format

Include the token in request headers:

Authorization: Bearer <JWT_TOKEN>

🧪 Testing with Postman

Register a user: Send a POST request to http://localhost:3000/api/users/register with JSON data.

Login: Send a POST request to http://localhost:3000/api/users/login to get a JWT token.

Access Protected Routes: Use the JWT token in the Authorization header to access GET /api/users/profile.

⚡ Deploying to Production

Set up MongoDB on a cloud provider (MongoDB Atlas or similar).

Use pm2 to run the server in production:
```
npm install -g pm2
pm2 start server.js --name backend-proj
```

Deploy using services like Heroku, Vercel, or AWS EC2.

🎯 Contribution

Feel free to contribute! Fork the repo, make changes, and submit a pull request.

📄 License

This project is open-source and available under the MIT License.
