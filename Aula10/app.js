const express = require("express");
const app = express();

const contatosRouter = require('./routes/contatosRouter');

app.use(express.json());

app.use("/contatos", contatosRouter)
// Dados
app.get("/", function(req, res) {
    res.send("Olá mundo!");
  });

app.listen(3000, function() {
  console.log("Servidor iniciado na porta 3000!");
});
//ccsc