import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { getMe, login, logout, register } from "../services/auth.api";

export const useAuth = () => {
    const { user, setUser, loading, setLoading } = useContext(AuthContext)

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.data)
        } catch (error) {
            throw error
        }
        finally {
            setLoading(false)
        }
    }

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            setUser(data.data)
            console.log(data.data)
        } catch (error) {
            throw error
        }
        finally {
            setLoading(false)
        }
    }


    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } catch (error) {
            throw error
        }
        finally {
            setLoading(false)
        }
    }

    const handleGetMe = async () => {
        try {
            const data = await getMe()
            setUser(data.data)
        } catch (error) {
             console.log(error.response?.data?.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        handleGetMe()
    }, [])

    return ({
        user, loading, handleRegister, handleLogin, handleLogout
    })
}