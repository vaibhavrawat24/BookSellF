# BookSellF

BookSellF is a MERN stack web application for buying, selling, and renting books. Users can browse books, filter by genre or author, add to cart, and checkout — all in a clean, modern interface.

🌐 **Live Site:** [booksellf.vercel.app](https://booksellf.vercel.app/)

🎬 **Demo:** [Watch on YouTube](https://youtu.be/JXT2zsgFuMw?si=8cCKr0uSOau0lz9Y)

<p>
<img src="https://github.com/vaibhavrawat24/BookSellF/assets/100408695/f44d9373-2d42-4cea-9076-fb7a73cea088" width="300" />
<img src="https://github.com/vaibhavrawat24/BookSellF/assets/100408695/303062aa-8217-42fc-b6c8-21bb3ecb8ff3" width="300" />
<img src="https://github.com/vaibhavrawat24/BookSellF/assets/100408695/8a8e540f-cea9-417c-8c80-f8cf2d59484d" width="300" />
<img src="https://github.com/vaibhavrawat24/BookSellF/assets/100408695/85cf84e0-fcfc-4fd3-a073-003b814e87a9" width="300" />
</p>

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Installation](#installation)
- [License](#license)

## Features

- **User Authentication** — Secure registration and login with JWT
- **Browse & Filter** — Filter books by genre, author, and price
- **Book Details** — Dedicated product pages with related books
- **Cart & Checkout** — Add to cart and pay via Braintree
- **Book Renting** — Rent books (coming soon)
- **Paper Recycling** — Doorstep paper recycling initiative (coming soon)
- **Admin Panel** — Manage products, categories, authors, and orders
- **Responsive Design** — Optimized for desktop and mobile

## Technologies Used

- **Frontend:** React, CSS, Bootstrap, Ant Design
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JSON Web Tokens (JWT)
- **Payments:** Braintree
- **Hosting:** Vercel (frontend) + Render (backend)

## Deployment

| Service | URL |
|---|---|
| Frontend | [booksellf.vercel.app](https://booksellf.vercel.app/) |
| Backend API | [booksellf-api.onrender.com](https://booksellf-api.onrender.com/) |

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vaibhavrawat24/BookSellF.git
cd BookSellF
```

2. Install dependencies:

```bash
npm install
cd client && npm install
```

3. Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
BRAINTREE_MERCHANT_ID=your_merchant_id
BRAINTREE_PUBLIC_KEY=your_public_key
BRAINTREE_PRIVATE_KEY=your_private_key
PORT=3002
```

4. Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

MIT — made with ☕ by [Vaibhav](https://vaibhavdev.qzz.io)
