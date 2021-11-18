const Sequelize = require('sequelize');
const connection = require('./database');

//Criando model com tabela usando Sequelize
//Representação da tabela MySQL com o javascript
const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//Se a tabela já existir ele não vai recriar a tabela
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;