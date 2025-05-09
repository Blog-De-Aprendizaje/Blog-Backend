import { body } from "express-validator";
import { validarCampos } from "./validate-field.js";

export const validatePost = [
    body("title")
        .notEmpty().withMessage("El título es obligatorio")
        .isLength({ max: 100 }).withMessage("El título debe tener máximo 100 caracteres"),
    body("content")
        .notEmpty().withMessage("La descripción es obligatoria"),
    body("course")
        .notEmpty().withMessage("El curso es obligatorio")
        .isIn(["Tecnología III", "Taller III", "Práctica supervisada III"]).withMessage("Curso no válido"),
    validarCampos
];
