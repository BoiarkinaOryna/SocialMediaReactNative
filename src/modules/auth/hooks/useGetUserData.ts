import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useMeQuery } from "../api/auth.api";
import { useUserContext } from "../context/user.context";

export function useGetUserData(){
    const { token, setUser } = useUserContext()

    const { data, isLoading, error, refetch } = useMeQuery(token!, {
        skip: !token
    })
    const [ userNeedsAnUpdate, setUserNeedsAnUpdate ] = useState<boolean>(false)

    useEffect(() => {
        if (!token) {
            router.canGoBack() ? router.back() : router.push("/auth")
        }
    }, [token])

    useEffect(() => {
        if (data) {
            console.log("data is set in user context", data)
            setUser(data)
        }
    }, [data])

    useEffect(() => {
        try{
            refetch()
        } catch (error){
            console.log(error)
        }
    }, [userNeedsAnUpdate])

    return {
        userData: data,
        isUserLoading: isLoading,
        userError: error,
        refetchUser: setUserNeedsAnUpdate
    }
}