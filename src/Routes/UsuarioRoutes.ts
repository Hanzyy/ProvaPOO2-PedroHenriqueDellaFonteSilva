import UsuarioController from "../Controllers/UsuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/usuario', UsuarioController.listUsuarios)

UsuarioRouter.post('/usuario', UsuarioController.createUsuario);

UsuarioRouter.put('/usuario', UsuarioController.updateUsuario);

UsuarioRouter.delete('/usuario', UsuarioController.deleteUsuario);

export default UsuarioRouter;