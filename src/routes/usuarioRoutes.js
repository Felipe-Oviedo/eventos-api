import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router
  
  .get("/usuario", usuarioController.listarUsuario)
  .post("/usuario", usuarioController.novoUsuario)


export default router;
