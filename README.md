### Description

This repo contains the code for the annotation interface used for "ExpertQA: Expert-Curated Questions and Attributed Answers." You can find the paper here: https://arxiv.org/abs/2309.07852

### Installation

Run `npm install` in both the root directory (backend) as well as the frontend directory to install all necessary packages. Make sure to run it in both folders to download libraries for both.

### Running the app

First, create a `.env` file in the root directory with a `PORT=` variable to specify what port you want the server to run as well as `MONGODB_URI=` variable to connect to a MongoDB database. Then, use `npm run dev` in the root folder to start the backend server. Finally, use `npm start` inside the frontend folder to start the frontend.

### Stack

This application uses the MERN stack--React in the frontend, Express / Node.js as the backend, and MongoDB as the database

### Structure

The backend server code is contained in `server.js` with the schema specified in `schema.js`. All the frontend code resides in the `frontend` folder with React components in `components` and different pages in `pages` routed by the react router in `App.js`.
