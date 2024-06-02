const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // Allows requests from this origin
    methods: ["GET", "POST"], // Allows these methods
  },
});

const userSocketMap = {}; // Maps user IDs to socket IDs

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]; // Returns the socket ID for a given user ID
};

io.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);
  const userId = socket.handshake.query.userId; // Extracts userId from socket handshake query

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id; // Maps userId to socket ID
  }
  io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emits online users to all clients

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);

    delete userSocketMap[userId]; // Removes user from the map on disconnection
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emits updated online users
  });
});

module.exports = { app, io, server, getReceiverSocketId }; // Exports necessary modules and functions
