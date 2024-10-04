const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
); 

const session = require("express-session");
const umDia = 100 * 60 * 60 * 24;

app.use(
  session({
    secret: "chavesecreta01423gf146gf46108fg0614tg614gf46gf601fgb0864",
    saveUninitialized: true,
    cookie: { maxAge: umDia },
    resave: false,
    name: "unplugged",
  })
);

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
  })
); 
app.set("view engine", "hbs"); 

app.use("./public", express.static("public"));

const rotas = require("./routers/rotas");
app.use("/", rotas); 

const conexao = require("./db/conn");


app.listen(3000, () => {
  console.log("Servidor iniciando na porta 3000");
});
