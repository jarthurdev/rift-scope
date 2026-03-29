// Servidor principal da aplicação, responsável por iniciar o servidor e configurar as rotas
import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => { // O servidor é iniciado na porta 3000, e quando estiver pronto, a mensagem "RiftScope API running..." será exibida no console
    console.log(`RiftScope API running in port ${PORT}...`);
});

