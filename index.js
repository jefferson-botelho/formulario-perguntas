const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Estou dizendo ao Express para usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Rotas
app.get("/", (req, res) => {
   res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
res.send("Título " + titulo + " Descrição " + descricao);
});

app.listen(8080,() =>{console.log("App rodando!");});