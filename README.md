# 🎯 RiftScope

RiftScope é uma API para análise de desempenho de jogadores de League of Legends, construída sobre a API oficial da Riot Games.

O foco do projeto é transformar dados brutos de partidas em métricas úteis e insights sobre o desempenho recente do jogador.

---

## 🚀 Funcionalidades

- 🔎 Busca de jogador via Riot ID (`nome#tag`)
- 📊 Cálculo de KDA médio
- 🏆 Campeão mais jogado nas últimas partidas
- 🔁 Cálculo de sequência atual (win/loss streak)
- 🎮 Resumo das partidas recentes

---

## 🧱 Arquitetura

O projeto segue uma arquitetura em camadas:

- Controller → entrada e validação  
- Service → regras de negócio  
- Integration → comunicação com a API da Riot  
- Utils → cálculos e processamento  
- DTOs → formatação da resposta  

---

## ⚙️ Stack

- Node.js  
- TypeScript  
- Express  
- Axios  
- Riot Games API (Account-V1, Match-V5)

---

## 🔌 Endpoint

```http
GET /player?riotId=nome#tag
```

## 📌 Status

🚧 Projeto em desenvolvimento.
