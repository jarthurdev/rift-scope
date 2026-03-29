// O app.ts serve para criar a aplicação somente, o servidor é outra coisa

import express from "express";
import playerRoutes from "./routes/playerRoutes.js";

const app = express(); // A variável app é a aplicação express, que é o que vamos usar para configurar as rotas e middlewares

app.use(express.json());
app.use("/api/player", playerRoutes);

export default app;