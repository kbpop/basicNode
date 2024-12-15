import * as http from "node:http";

const PORT = 6000;

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("The Earth says Hello!")
    res.end()
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);