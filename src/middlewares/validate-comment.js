import { body, validationResult } from "express-validator";

export const validateComment = [
    body('name').notEmpty().withMessage("El nombre es obligatorio"),
    body('content').notEmpty().withMessage("El contenido del comentario es obligatorio"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
        }
        next();
    }
];
