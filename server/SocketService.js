const { Server } = require("socket.io");

// const initSocket = (httpServer) => {
//   const io = new Server(httpServer, {
//     cors: {
//       origin: "http://localhost:5173",
//       methods: ["GET", "POST"],
//     },
//   });

const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("send_rating", (rating) => {
      io.emit("receive_rating", rating);
    });

    socket.on("send_review", (review) => {
      io.emit("receive_review", review);
    });

    socket.on("place_order", (data) => {
      io.emit("receive_order", data);
    });

    socket.on("added_product", (name) => {
      io.emit("receive_product", name);
    });
  });
};

module.exports = initSocket;
