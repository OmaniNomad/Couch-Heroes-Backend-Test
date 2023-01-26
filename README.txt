-----------------------
# Overview and Endpoints:
-----------------------
This app is a REST API created using Node.js, Typescript, Yarn, MongoDB, JWT, and Bcrypt. It contains the following endpoints:

/apiCheckStatus -> This can be used to check the health status of the app via console.

/api/register -> Allows the user to register using an email and password. Passwords are hashed using Bcrypt.

/api/login -> Allows the user to log into the application with an accessToken that lasts 1 minute. The access token can be found in config/default.ts

/api/logout -> Allows the user to log out from the application.

/api/leaderboard/fetch -> Allows a logged in user to fetch the top 3 users (based on their high scores) from all the registered users.

/api/leaderboard/update -> Allows a logged in user to update their high score if the provided score is greater than their current high score.

-----------------------
# Installation and Usage:
-----------------------

The app contains a Dockerfile that will build and start the app. 

The port number used is 7777 and can be found in config/default.ts

The database URI is currently set in config/default.ts as: "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2/backendChallenge"

Please change the URI to match your local/cloud mongodb database.

When using postman to test the api, please please the endpoint in your collection variables (ex: http://localhost:7777 )

In postman, once a user is registered, copy their email over to "Login User"

Once the user is logged in they will be issued an access token that can be used in the authorization tab for "Logout User", "Fetch Top 3 Scores", and "Update User Score"

When updating the user's score, you must copy over the user's object ID created at registration.

-----------------------
# Dependencies:
-----------------------
```
"dependencies": {
    "bcrypt": "^5.1.0",
    "config": "^3.3.8",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "lodash": "^4.17.21",
    "mongoose": "^6.8.3",
    "zod": "^3.20.2"
  },
"devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/config": "^3.3.0",
    "@types/express": "^4.17.15",
    "@types/jsonwebtoken": "^9.0.1",
    "@types/lodash": "^4.14.191",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^18.11.18",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.9.4"
}
```
-----------------------
# Contact Information:
-----------------------
Name: Yousef Al Alawi
Email: ysalalawi@gmail.com