//Configurar Back End
//Criar duas variaveis - Consumir o fremework express e instancia
const express = require('express');
const app = express();

//Criar rota para os arquivos estaticos  (public)
app.use(express.static('public'));

//Qual porta ira rodar
app.listen(3000, () => {
    console.log(`Servidor rodando no link http://localhost:3000`)
})