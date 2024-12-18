# Hanashi Chat App Backend

This repository contains the backend codebase for the Hanashi Chat App, a modern chat application enabling real-time communication.

## Live Demo

Check out the live application here: [Hanashi Chat App](https://hanashi-chat.vercel.app/) 

## Frontend Repository

The frontend codebase for Hanashi can be found here: [Hanashi Chat App Frontend](https://github.com/Siddhant0909/Hanashi-chatapp-frontend)  

## Features

- **Real-Time Messaging**: Powered by Socket.IO for instant communication.
- **User Authentication**: Secure login and signup with JWT and cookies.
- **Image Uploads**: Upload and manage profile pictures or chat images via Cloudinary.
- **Global State Management**: Efficiently managed using Zustand.
- **Responsive UI**: Built with Tailwind CSS and DaisyUI for a seamless experience across devices.

## Tech Stack

### Frontend
- **React**: Frontend library for building dynamic user interfaces.
- **Zustand**: Lightweight state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS components for a polished UI.
- **Axios**: For making HTTP requests.

### Backend
- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and chat data.
- **Socket.IO**: For real-time bi-directional communication.
- **JWT**: For secure authentication.
- **bcrypt**: For password hashing.
- **Cloudinary**: For image storage and CDN.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Steps

#### Clone the repository:
   ```
   git clone https://github.com/Siddhant0909/Hanashi-chatapp-backend.git

   ```

#### Navigate to the project directory:
```
cd Hanashi-chatapp-backend

```
#### Install dependencies:
```
npm install

```
#### Set up the backend:

- Clone the backend repository and follow its setup instructions:   
- https://github.com/Siddhant0909/Hanashi-chatapp-backend

#### Set up environment variables:
Create a .env file in the root directory and add the following variables:
```
PORT=3000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>

```

#### Start the server:
```
npm start

```

#### Verify the server is running: Open your browser or Postman and visit:
```
http://localhost:3000

```
