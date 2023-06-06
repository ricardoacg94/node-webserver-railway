const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    res.write("enviando esto al cliente para mostrar en pantalla");

    res.end();
  })

  .listen(8080);

console.log("escuchando en el puerto,", 8080);
