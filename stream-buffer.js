const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET");

  const readAbleStream = fs.createReadStream(process.cwd() + "/texts/read.txt");

  readAbleStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });

  readAbleStream.on("end", () => {
    res.statusCode = 200;
    res.end("The streaming is over");
  });

  readAbleStream.on("error", (error) => {
    console.log(error);
    res.statusCode = 500;
    res.end("Something is wrong");
  });
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
