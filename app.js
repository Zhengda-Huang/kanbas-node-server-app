import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./Lab5/Lab5.js";
import CourseRoutes from "./Courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from "./Assignment/routes.js";
import "dotenv/config";


const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
app.use(express.json());
Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

app.listen(4000)