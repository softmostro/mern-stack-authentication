# MERN Stack Authentication Form
This is a simple authentication form built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to log in and sign up for an account.

## Installation
To install the dependencies for this project, run the following command:

* npm install

This will install all of the necessary packages listed in the package.json file.

## Configuration
Before running the app, you will need to create a .env file in the root directory of the project. This file should contain the following environment variables:

* MONGO_URI= \<your MongoDB connection string\>
* JWT_SECRET= \<your JWT secret key\>

Replace \<your MongoDB connection string\> with the connection string for your MongoDB database, and \<your JWT secret key\> with a secret key of your choice for JWT authentication.

## Usage
To run the app, use the following command:

* npm start

This will start the Node.js server and the React front-end.

You can then access the app by visiting http://localhost:3000 in your web browser.

## Folder Structure
* **client:** Contains the React front-end code.
* **server:** The main Node.js server file.

## Contributing
Contributions to this project are welcome. If you find a bug or would like to suggest a new feature, please open an issue or submit a pull request.
