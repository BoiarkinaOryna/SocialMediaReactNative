import { io, Socket } from "socket.io-client";
import { wsUrl } from "../../constants/api";

export const ClientSocket: Socket = io(wsUrl, {
	autoConnect: false,
});