Backend Project Assignment

Project Overview
This is a backend project built using Node.js, Express, and MongoDB. It provides user authentication, profile management, and JWT-based authorization. The project follows RESTful API standards.

Features

1) User registration and authentication

2) JWT-based authentication for secure access

3) Profile management (view and update user profile)

4) MongoDB integration for data storage

5) Middleware for authentication and security

PREREQUISITES

Ensure you have the following installed on your system:

1) Node.js (v14 or later recommended)

2) MongoDB (Local or cloud-based like MongoDB Atlas)

#)Git

INSTALLATION AND SETUP

1. Clone the Repository

Open your terminal and run the following command:

```
git clone https://github.com/AditiRP18/backend-proj.git
cd backend-proj
```
2. Install Dependencies

Run the following command to install all required Node.js dependencies:

``` npm install ```

3. Configure Environment Variables

Create a .env file in the root directory and add the following variables:
```
 PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```
Replace your_mongodb_connection_string with your MongoDB database URL and your_secret_key with a strong secret key for JWT authentication.

4. Start the Server

Run the following command to start the server:
```
npm start
```
The server will run on http://localhost:3000/.

API Endpoints

User Authentication

1. Register User (POST)

Endpoint:
```
http://localhost:3000/api/users/register
```
Request Body (JSON):
```
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "bio": "Software Developer",
  "profilePictureUrl": "https://example.com/profile.jpg"
}
```
2. Login User (POST)

Endpoint:
```
http://localhost:3000/api/users/login
```
Request Body (JSON):
```
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
3. Get User Profile (GET) - Requires Authorization

Endpoint:
```
http://localhost:3000/api/users/profile
```
Headers:
```
Authorization: Bearer <JWT_TOKEN>
```
4. Update User Profile (PUT) - Requires Authorization

Endpoint:
```
http://localhost:3000/api/users/profile
```
Request Body (JSON):
```
{
  "name": "John Doe Updated",
  "address": {
    "street": "456 New St",
    "city": "Los Angeles",
    "country": "USA"
  },
  "bio": "Full-Stack Developer",
  "profilePictureUrl": "https://example.com/new-profile.jpg"
}
```

Testing API Endpoints with Postman

1) Open Postman and create a new request.

2) Select the request type (e.g., POST for login/register, GET for fetching user profile).

3) Enter the API URL, such as http://localhost:3000/api/users/register.

4) For protected routes, navigate to the Headers tab and add:

   -Key: Authorization

   -Value: Bearer <JWT_TOKEN> (Replace <JWT_TOKEN> with the token received 
    during login)

5) Click Send to test the API request.

Project Structure

```
backend-proj/
│── config/          # Configuration files (JWT, Database connection, etc.)
│── controllers/     # Request handlers (User authentication, Profile management, etc.)
│── middleware/      # Authentication and security middleware
│── models/         # Mongoose models
│── routes/         # API route handlers
│── server.js       # Main entry point
│── .env            # Environment variables (ignored in Git)
│── package.json    # Project dependencies

```
Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request with improvements.

License

This project is licensed under the MIT License.










