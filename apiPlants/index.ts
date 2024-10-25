const net = require("net");
const server = net.createServer((socket:any) => {
  console.log("Client connected");

  socket.on("data", (data:any) => {
    console.log("Received:", data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });


  socket.write("Hello from the server\n");
}).on("error", (err:any) => {
  throw err;
});


server.listen(3003, () => {
  console.log("opened server on", server.address());
});