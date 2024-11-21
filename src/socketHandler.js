import { io } from "socket.io-client";

let socket = null;

export const connectWebSocket = (
  url,
  tableId,
  chairIndex,
  playerId,
  budget
) => {
  if (!socket) {
    console.log(url);
    socket = io("http://localhost:5000");

    // socket.on('connect', () => {
    //     console.log('Connected to server:', socket.id);

    //     // Join a table
    socket.emit("joinTable", tableId, playerId, chairIndex, budget);
    // });

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      console.log("Received:", event.data);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      socket = null;
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }
};

export const sendWebSocketMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    console.error("WebSocket is not open");
  }
};

export const closeWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};
