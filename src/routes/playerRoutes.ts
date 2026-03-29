import { Router } from "express";
import { getPlayer } from "../controllers/playerController.js";

const router = Router();

router.get("/", getPlayer); // Rota GET para "/api/player", que chama a função getPlayer do playerController

export default router;