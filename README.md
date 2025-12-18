# MGE
```
project-root/
├─ backend/
│  ├─ config/
│  ├─ controller/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  ├─ service/
│  ├─ utils/
│  ├─ .env
│  ├─ .env.example
│  ├─ index.js
│  └─ package.json
│
├─ frontend-MGE/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ layouts/
│  │  ├─ router/
│  │  ├─ stores/
│  │  ├─ views/
│  │  ├─ App.vue
│  │  └─ main.js
│  ├─ public/
│  ├─ .env
│  ├─ .env.example
│  └─ package.json
```



🛠 Tech Stack

    Frontend
        Vue3
        Vite
        TailwindCss
        Pinia
        Axios
        Sweetalert2

    Backend
        Nodejs
        Expressjs
        Sequelize
        Postgresql
        bcrypt
        JWT




🚀 Features

    Authentication (Login / Logout)
    Product CRUD
    Category CRUD
    Product–Category relationship
    Protected dashboard routes
    REST API

⚙️ Backend Setup

    cd backend
    npm install
    npm run dev

⚙️ Frontend Setup

    cd frontend-MGE
    npm install
    npm run dev

    email: test@email.com
    password: password123

📡 API Endpoints

    Authentication

        POST /api/auth/login

    Product

        GET /api/products
        GET /api/products/:slug
        POST /api/products
        PUT /api/products/:slug
        DEL /api/products/:slug

    Category

        GET /api/categories
        GET /api/categories/:slug
        POST /api/categories
        PUT /api/categories/:slug
        DEL /api/categories/:slug