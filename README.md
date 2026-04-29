# ThinkBoard - MERN Notes App

A simple full-stack notes app built with the MERN stack. Users can create, view, update, and delete notes with a clean React interface and a REST API backend.

## Features

- Create, edit, and delete notes
- View all notes sorted by newest first
- MongoDB database storage
- API rate limiting with Upstash Redis
- Responsive React UI

## Tech Stack

- MongoDB
- Express.js
- React
- Node.js
- Vite
- Tailwind CSS / DaisyUI
- Upstash Redis

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HamzaNaser05/mern-thinkboard.git
cd mern-thinkboard
```

### 2. Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3. Set up environment variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
```

### 4. Run the app

Start the backend:

```bash
npm run dev --prefix backend
```

Start the frontend:

```bash
npm run dev --prefix frontend
```

The frontend will run at `http://localhost:5173` and the backend at `http://localhost:5001`.

## API Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get one note |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the ISC License.
