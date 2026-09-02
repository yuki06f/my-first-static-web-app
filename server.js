const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Error al cargar index.html");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});