import { FullUserWithoutRelations } from "@shared/types/user.types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface UserContextContract {
    token: String | null,
    setToken: (token: String | null) => void,
	user: FullUserWithoutRelations | null,
	setUser: (user: FullUserWithoutRelations | null) => void
}

export const UserContext = createContext<null | UserContextContract>(null);
export function useUserContext() {
	const ctx = useContext(UserContext);
	if (!ctx) {
        throw new Error("UserContext is not inside provider")
    };
	return ctx;
}
export function UserContextProvider(props: PropsWithChildren) {
	const [token, setToken] = useState<String | null>(null);
	const [user, setUser] = useState<FullUserWithoutRelations | null>(null)
	return (
		<UserContext
			value={{
				token,
				setToken,
				user,
				setUser
			}}
			{...props}
		></UserContext>
	);
}