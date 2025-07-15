// Import dependencies
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

// Import routers
import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"

// App config
dotenv.config()
const app = express()
const port = process.env.PORT || 8001
mongoose.set('strictQuery', true)

// Middleware
app.use(express.json())
app.use(cors({
    origin: 'http://20.55.25.24:3000',
    credentials: true
}))//cross origin resource sharing

// DB config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log("MongoDB connection error:", err)
    } else {
        console.log("DB Connected")
    }
})

// API routes
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

// Health check route
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Server is healthy",
        timestamp: new Date().toISOString()
    })
})

// Start server
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})
