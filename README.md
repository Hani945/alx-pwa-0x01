# 🎬 CineSeek – ALX Project 0x14

A sleek, modern **movie discovery app** built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
CineSeek connects to the [MoviesDatabase API](https://rapidapi.com/SAdrian/api/moviesdatabase) via **RapidAPI**, allowing users to explore movies by year, genre, and title — with a responsive layout and reusable React components.

---

## 🚀 Features
- 🎥 Browse trending and classic movies  
- 🔍 Search by title, year, or genre  
- ⚡ Fast API fetching with server-side integration  
- 💅 Built using Next.js + Tailwind CSS  
- 🧱 Modular components (Header, Footer, Layout, MovieCard)

---

## 🧩 Tech Stack
- **Framework:** Next.js 14  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **API:** MoviesDatabase (via RapidAPI)  
- **Icons:** FontAwesome  

---

## ⚙️ Setup & Run

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/alx-project-0x14.git
cd alx-project-0x14/alx-movie-app

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
echo "MOVIE_API_KEY=YOUR_API_KEY" > .env.local

# 4️⃣ Start the app
npm run dev

🗂️ Directory Overview
alx-movie-app/
├── components/
│   ├── commons/     # Button, Loading, MovieCard
│   └── layouts/     # Header, Footer, Layout
├── pages/
│   ├── index.tsx    # Landing page
│   └── movies/      # Movies listing
└── interfaces/      # TypeScript interfaces

🧠 Author
Hanna
Student at ALX Software Engineering Program