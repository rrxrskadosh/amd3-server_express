//Creando un Server con Express
let express = require("express");
let fs = require("fs");
let path = require("path");

let app = express();

//Middlewares
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(express.urlencoded({extended: false})); 

//app.get are Method GET
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact", (request, response) => {
    response.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/about", (request, response) => {
    response.sendFile(path.join(__dirname, "about.html"));
});

app.get("/projects", (request, response) => {
    response.sendFile(path.join(__dirname, "projects.html"));
});

app.post("/usuarios", (request, response) => {    
    fs.writeFile("db_usuarios.txt", JSON.stringify(request.body), (error) => {
        if(error){
            console.log(error);
        }
        response.redirect("/");
    });
});

//app.use are GET, POST, DELETE, PUT
app.use((request, response) => {
    response.sendFile(path.join(__dirname, "404.html"));
});

app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000");
});