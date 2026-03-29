import { Request, Response } from "express";

export function getPlayer(req: Request, res: Response) {
    return res.json ({
        message: "Rota de player, agora no controller, funcionando"
    })
};