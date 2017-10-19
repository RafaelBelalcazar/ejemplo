const http = require("http"); //Importar dependecias http para crear server

const hostname="localhost";
const port = 3000;

//Crea server
const server = http.createServer((req, res)=>{
    res.statusCode = 200; //Solicitud exitosa status code http
    res.setHeader("Content-Type", "text/plane");
    res.end("Hola Vitor Tolazo!");
}); 
// Escucha petición
server.listen(port, hostname, ()=>{
    console.log("Servidor iniciado");
});


