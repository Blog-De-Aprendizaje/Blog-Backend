"use strict";

import express from "express"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import postsRoutes from "../src/posts/post.routes.js";
import commentsRoutes from "../src/comments/comment.routes.js";
import { swaggerDocs, swaggerUi } from "./swagger.js";
import { dbConnection } from "./mongo.js"

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
};

const configs = (app) => {
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
}

const routes = (app) => {
    app.use("/blogAprendizaje/v1/posts", postsRoutes),
    app.use("/blogAprendizaje/v1/comments", commentsRoutes)
    app.use("/blogAprendizaje/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

const conectarDB = async () => {
    try{
        await dbConnection();
    }catch(err){
        console.log(`Database connection failed: ${err}`)
    }
}

export const initServer = () => {
    const app = express();
    try {
        middlewares(app)
        configs(app);
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        routes(app);
        conectarDB();
        app.listen(process.env.PORT);
        console.log(`Server running on port: ${process.env.PORT}`);
    } catch (err) {
        console.log(`Server init failed: ${err}`);
    }
};