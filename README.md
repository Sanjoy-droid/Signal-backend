# Signal Backend Clone

## Overview

This repository contains the backend code for a Signal web chat clone, implemented using Node.js, Express, Socket.IO and MongoDB. It provides RESTful API endpoints for user authentication, messaging, and other features required for the Signal clone application.

## Features

- **User Authentication:** Implement user authentication functionalities, including sign up, log in, log out, and token-based authentication using JSON Web Tokens (JWT).

- **Real-time Messaging:** Enable real-time messaging functionality using Socket.IO, allowing users to send and receive messages instantly.

- **Data Persistence:** Connect to a MongoDB database to store user data, messages, and other relevant information, ensuring data integrity and persistence across server restarts.

- **Validation and Error Handling:** Utilize Express.js middleware for request validation and error handling, ensuring robustness and security in API interactions.

- **Cross-Origin Resource Sharing (CORS):** Enable CORS middleware to allow cross-origin requests from the frontend application, facilitating communication between the client and server.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Sanjoy-droid/Signal-backend.git

   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Create .env file:**

```bash
PORT=5000
MONGOURI=<your_mongodb_connection_uri>
JWT_SECRET=<your_secret_environment_variable>
HOST=<your_frontend_url>

```

2. **Start the development server:**

   ```bash
   nodemon index
   ```

3. **Access the API:**

   The API will be available at http://localhost:5000/api.

- **API Endpoints**

- **Authentication**

  POST "/api/auth/createuser" Register a new user.
  POST "/api/auth/login" Log in an existing user.

- **Messaging**

  POST "/api/messages/:id" - Send Messages
  GET "/api/messages" - Get Messages

- **User**
  GET "/api/users" Get all Users Info

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Disclaimer

This Signal Clone project is created for educational purposes, aiming to showcase skills in web development and React programming. It is not an official Signal product, and all credits for the original Signal platform go to the dedicated team at Signal. The use of the term "Signal" is for descriptive purposes only.

This project is not intended for commercial use or to imply any official association with Signal. All trademarks, registered trademarks, and service marks mentioned herein are the property of their respective owners.
