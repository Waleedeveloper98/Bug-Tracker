import { useContext, useEffect } from "react";
import { BugContext } from "../BugProvider";
import { createBug, getAllBugs, updateTitleAndDescription } from "../services/bug.api";

export const useBug = () => {
    const { bugs, setBugs, loading, setLoading, bug, setBug, editBug, setEditBug } = useContext(BugContext)

    const handleGetAllBugs = async () => {
        setLoading(true)
        try {
            const data = await getAllBugs()
            setBugs(data.data)
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const handleCreateBug = async ({ title, description, status, priority }) => {
        try {
            const data = await createBug({ title, description, status, priority })
            setBug(data.data)
            setBugs(prevBugs => [...prevBugs, bug])
            handleGetAllBugs()
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const handleUpdateTitleAndDescription = async (bugId, { title, description }) => {
        setLoading(true)
        try {
            await updateTitleAndDescription(bugId, { title, description })
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return ({
        bugs, loading, handleGetAllBugs, handleCreateBug, editBug, setEditBug, handleUpdateTitleAndDescription
    })
}