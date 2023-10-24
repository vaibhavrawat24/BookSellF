# BookSellF

BookSellF is a MERN stack web application for buying, selling, and renting books. Users can list books, search for books, and interact with other book enthusiasts in a seamless online environment.

![Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** User registration and authentication are handled securely.
- **Listing Books:** Users can list books for sale or rent, providing details about the book, price, and rental terms.
- **Search and Filter:** Users can search for books and apply filters to find the books they need.
- **User Profiles:** Users have profiles with their listings and contact information.
- **Private Messaging:** Users can communicate with other users through private messaging.
- **Admin Verification:** Admins verify product listings before they are displayed to ensure the quality of listings.
- **Responsive Design:** The website is optimized for various devices, including desktop and mobile.

## Technologies Used

- **Frontend:** React, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Real-time Messaging:** Socket.IO
- **Styling:** CSS, Bootstrap
- **File Upload:** Multer
- **Maps Integration:** Mapbox
- **Deployment:** Heroku, Netlify
- **Version Control:** Git, GitHub

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/BookSellF.git
   cd BookSellF

2. Install dependencies for both the client and server:

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

3, Set up environment variables. Create a .env file in the server directory with the following content:
  MONGODB_URI=your_mongodb_uri
  SECRET_KEY=your_secret_key

4. Start the client and server:

# Start the server
cd server
npm start

# Start the client
cd ../client
npm start

Open your browser and visit http://localhost:3000 to use the application.

# Usage
Register or log in to your account.
List books you want to sell or rent.
Search and browse books listed by other users.
Contact sellers or renters through private messaging.
Admins will verify your product listing before it's displayed.

# Contributing
We welcome contributions from the community. If you'd like to contribute to the project, please follow our Contribution Guidelines.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
