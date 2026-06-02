import { io, Socket } from "socket.io-client";
import { API_BASE_URL } from "@shared/api/api";

let socket: Socket | null = null;

export const connectSocket = (token: string) => {
  if (!socket) {
    socket = io(API_BASE_URL, {
      transports: ["websocket"],
      autoConnect: false,
      auth: { token },
    });

    socket.on("connect", () => {
      console.log("✅ socket connected");
    });

    socket.onAny((event, data) => {
      console.log("📩 socket:", event, data);
    });
  }

  socket.auth = { token };

  if (!socket.connected) {
    socket.connect();
  }

  return socket;
};

export const getSocket = () => {
  if (!socket) throw new Error("Socket not initialized");
  return socket;
};

export const disconnectSocket = () => {
  socket?.disconnect();
  socket = null;
};