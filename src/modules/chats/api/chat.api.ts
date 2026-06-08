// import { baseApi } from "@shared/api/api";
// import { Message } from "../ui/ChatWindow/Chat/chat.types";
// import { connectSocket, getSocket } from "./socket";

import { baseApi } from "@shared/api/api";
import { ChatWithChatParticipantsDto, MyChatsResponse } from "../types/chat.types"

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


// const chatsApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getFriends: builder.query<friend[], string>({
//             query: (token) => ({
//                 url: "/friends/all",
//                 headers: {Authorization: `Bearer ${token}`}
//             })
//         }),
//     })
// })

const chatApi = baseApi
	.enhanceEndpoints({
		addTagTypes: ["Chat"],
	})

	.injectEndpoints({
		endpoints: (build) => ({
			createChat: build.mutation<any, {contactUserId: number, token: string}>({
				query: ({contactUserId, token}) => ({
					url: "/chats",
					method: "POST",
					body: {contactUserId},
                    headers: { 
                        Authorization: `Bearer ${token}` 
                    }
				}),

				invalidatesTags: ["Chat"],
			}),
			getChatIdByUserIds: build.query<{chatId: number}, {userId: number, token: string}>({
				query: ({userId, token}) => ({
					url: `/chats/${userId}`,
					method: "GET",
                    headers: {Authorization: `Bearer ${token}`}
				}),
			}),
			getChatInfo: build.query<any, {chatId: number, token: string}>({
				query: ({chatId, token}) => ({
					url: `/chats/chat/${chatId}`,
					method: "GET",
                    headers: {Authorization: `Bearer ${token}`}
				}),
			}),
			getMyChats: build.query<MyChatsResponse, string>({
				query: (token) => ({
					url: "/chats/my",
					method: "GET",
					headers: { Authorization: `Bearer ${token}` },
				}),
				providesTags: ["Chat"],
			}),
            
			// getAllChats: build.query<ChatWithContactInfo[], void>({
			// 	query: () => ({
			// 		url: "/chats/my",
			// 		method: "GET",
			// 	}),
			// 	providesTags: ["Chat"],
			// 	transformResponse(
			// 		baseQueryReturnValue: ChatWithParticipantInfoResponse[],
			// 	) {
			// 		return baseQueryReturnValue.map((chat) => {
			// 			const { participants, ...restChat } = chat;
			// 			const { contactsOf, ...restUser } =
			// 				participants[0].user;
			// 			if (contactsOf.length > 0) {
			// 				return {
			// 					...restChat,
			// 					isInContact: true,
			// 					participant: {
			// 						...restUser,
			// 						contactsOf: contactsOf[0],
			// 					},
			// 				};
			// 			} else {
			// 				return {
			// 					...restChat,
			// 					isInContact: false,
			// 					participant: restUser,
			// 				};
			// 			}
			// 		});
			// 	},
			// }),
		}),
	});

export const {
	useCreateChatMutation,
	useLazyGetChatIdByUserIdsQuery,
	useLazyGetChatInfoQuery,
	useGetMyChatsQuery
} = chatApi;