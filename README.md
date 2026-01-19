# MERN Todo App

A full-stack todo application built with MongoDB, Express, React, and Node.js. Create, read, update, and delete your daily tasks with a clean and responsive interface.

## 🚀 Features

- ✅ Create new todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit existing todos
- ✅ Delete todos
- ✅ Filter todos (All, Active, Completed)
- ✅ Responsive design
- ✅ Real-time updates

## 🛠️ Tech Stack

**Frontend:**
- React (with Vite)
- Axios for API calls
- CSS3 for styling

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## 📁 Project Structure

```
mern-todo-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── components/
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── api.js         # API calls
│   │   └── App.css
│   └── package.json
│
├── server/                 # Node + Express backend
│   ├── models/
│   │   └── Todo.js        # Mongoose schema
│   ├── routes/
│   │   └── todoRoutes.js  # API routes
│   ├── server.js          # Express setup
│   └── package.json
│
└── README.md
```

## 🎯 Todo Schema

```javascript
{
  title: String (required),
  description: String,
  completed: Boolean (default: false),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas account)
- Git

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variables to .env
MONGODB_URI=mongodb://localhost:27017/todoapp
PORT=5000

# Start the server
npm start
```

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| PATCH | `/api/todos/:id/toggle` | Toggle todo completion status |
| DELETE | `/api/todos/:id` | Delete a todo |

## 📝 API Request Examples

### Create Todo
```bash
POST http://localhost:5000/api/todos
Content-Type: application/json

{
  "title": "Learn MERN Stack",
  "description": "Build a todo app from scratch"
}
```

### Update Todo
```bash
PUT http://localhost:5000/api/todos/123abc
Content-Type: application/json

{
  "title": "Master MERN Stack",
  "description": "Build multiple projects",
  "completed": true
}
```

### Toggle Completion
```bash
PATCH http://localhost:5000/api/todos/123abc/toggle
```

## 🎨 Component Breakdown

### TodoForm
- Input fields for title and description
- Form validation
- Submit handler for creating/updating todos
- Edit mode functionality

### TodoList
- Displays all todos
- Filter buttons (All, Active, Completed)
- Maps through todos and renders TodoItem components

### TodoItem
- Individual todo display
- Checkbox for completion toggle
- Edit and Delete buttons
- Visual indication of completed status

## 🚀 Deployment

### Deploy Backend (Railway)

1. Push code to GitHub
2. Connect Railway to your GitHub repo
3. Add environment variables in Railway dashboard
4. Deploy automatically

### Deploy Frontend (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Update API URL in `api.js` to your Railway backend URL
4. Deploy automatically

## 🔐 Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend (optional)
```
VITE_API_URL=http://localhost:5000/api/todos
```

## 🐛 Common Issues & Solutions

**Issue:** CORS error when connecting frontend to backend
- **Solution:** Ensure `app.use(cors())` is in server.js

**Issue:** Cannot connect to MongoDB
- **Solution:** Check MongoDB is running (`mongod`) or verify Atlas connection string

**Issue:** Todos not updating in real-time
- **Solution:** Make sure you're calling `fetchTodos()` after create/update/delete operations

**Issue:** "Module not found" errors
- **Solution:** Run `npm install` in both client and server directories

## 📚 What You'll Learn

By building this project, you'll understand:

- ✅ Building RESTful APIs with Express
- ✅ MongoDB CRUD operations with Mongoose
- ✅ React state management with useState
- ✅ useEffect for data fetching
- ✅ Component composition and props
- ✅ Async/await and Promises
- ✅ Frontend-backend integration
- ✅ Deployment workflow

## 🎯 Future Enhancements

Add these features to make your project stand out:

**Easy:**
- [ ] Add due dates to todos
- [ ] Sort todos by date or priority
- [ ] Add a search/filter bar
- [ ] Character count for description

**Medium:**
- [ ] User authentication (JWT)
- [ ] Categories/tags for todos
- [ ] Priority levels (High, Medium, Low)
- [ ] Dark mode toggle

**Advanced:**
- [ ] Drag and drop to reorder
- [ ] Recurring todos
- [ ] Share todos with other users
- [ ] Email notifications for due tasks

## 📖 Learning Resources

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🏆 Your Progress Tracker

- [ ] Day 1: Backend setup, Express server running
- [ ] Day 2: MongoDB connected, Todo model created
- [ ] Day 3: All API routes working (CRUD)
- [ ] Day 4: React app setup, basic UI
- [ ] Day 5: Connect frontend to backend
- [ ] Day 6: Create todo fun