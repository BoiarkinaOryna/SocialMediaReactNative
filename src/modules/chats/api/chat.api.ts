// import { baseApi } from "@shared/api/api";
// import { Message } from "../ui/ChatWindow/Chat/chat.types";
// import { connectSocket, getSocket } from "./socket";

// type GetMessagesArgs = {
//   chatId: string;
//   token: string;
// };

// export const chatApi = baseApi.injectEndpoints({
//   overrideExisting: true,

//   endpoints: (build) => ({
//     getChatMessages: build.query<Message[], GetMessagesArgs>({
//       queryFn: async ({ chatId, token }) => {
//         const socket = connectSocket(token);

//         socket.emit("join_chat", { chatId });
//         socket.emit("get_messages", { chatId });

//         return { data: [] };
//       },

//       async onCacheEntryAdded(arg, api) {
//         await api.cacheDataLoaded;

//         const socket = getSocket();

//         const handleMessages = (data: Message[]) => {
//           api.updateCachedData(() => data);
//         };

//         const handleNewMessage = (message: Message) => {
//           if (String(message.chatId) !== arg.chatId) return;

//           api.updateCachedData((draft) => {
//             const exists = draft.find((m) => m.id === message.id);
//             if (!exists) draft.push(message);
//           });
//         };

//         socket.on("messages", handleMessages);
//         socket.on("new_message", handleNewMessage);

//         return () => {
//           socket.off("messages", handleMessages);
//           socket.off("new_message", handleNewMessage);
//         };
//       },
//     }),

//     sendMessage: build.mutation<
//       { ok: true },
//       { chatId: string; text: string; senderId: number; token: string }
//     >({
//       queryFn: async ({ chatId, text, senderId }) => {
//         const socket = getSocket();

//         socket.emit("send_message", {
//           chatId,
//           text,
//           senderId,
//         });

//         return { data: { ok: true } };
//       },

      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   const patch = dispatch(
      //     chatApi.util.updateQueryData(
      //       "getChatMessages",
      //       { chatId: arg.chatId, token: arg.token },
            // (draft) => {
            //   draft.push({
            //     created_at: "",
            //     chat: arg.chatId,
            //     text: arg.text,
            //     sender: {
            //       id: arg.senderId,
            //     },
            //   });
            // }
        //   )
        // );

        // try {
        //   await queryFulfilled;
        // } catch {
        //   patch.undo();
        // }
//       },
//     }),
//   }),
// });

// export const {
//   useGetChatMessagesQuery,
//   useSendMessageMutation,
// } = chatApi;