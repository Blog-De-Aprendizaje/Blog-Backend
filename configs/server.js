"use strict";

import express from "express"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(helmet());
    app.use(cors());
};

export const initServer = () => {
    const app = express();
    
    try {
        middlewares(app)
        app.listen(process.env.PORT)
        console.log(`Server runing  on port: ${process.env.PORT}`)
    } catch (err) {
        console.error("Error al iniciar el servidor:", err.message);
    }
};