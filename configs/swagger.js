import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog de Aprendizaje",
            version: "1.0.0",
            description: "API for the management of an product storage app",
            contact:{
                name: "Adrian Morataya",
                email: "ssoto-2023147@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/blogAprendizaje/v1"
            }
        ]
    },
    apis:[
        "./src/comments/comment.routes.js",
        "./src/posts/post.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}