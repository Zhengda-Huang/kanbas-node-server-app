import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./Lab5/Lab5.js";
import CourseRoutes from "./Courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from "./Assignment/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);
import UserRoutes from "./users/routes.js";
import session from "express-session";

const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    console.log("not dev")
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}


app.use(
    session(sessionOptions)
);

app.use(express.json());
Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);


app.listen(4000)