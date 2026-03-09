import { useContext, useEffect } from "react";
import { StatContext } from "../StatProvider";
import { getStats } from "../services/stat.api";

export const useStat = () => {
    const { stats, setStats, loading, setLoading } = useContext(StatContext)

    const handleGetStats = async () => {
        setLoading(true)
        try {
            const data = await getStats()
            setStats(data.data)
            console.log(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        handleGetStats()
    }, [])
    return ({
        stats, loading, handleGetStats
    })
}