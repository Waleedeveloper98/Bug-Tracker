import { useContext, useEffect } from "react";
import { BugContext } from "../BugProvider";
import { createBug, deleteBug, getAllBugs, myAllBugs, updateABug, updateBugStatus } from "../services/bug.api";

export const useBug = () => {
    const { bugs, setBugs, loading, setLoading, bug, setBug, editBug, setEditBug, myBugs, setMyBugs } = useContext(BugContext)

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

    const handleUpdateABug = async (bugId, { title, description, status, priority }) => {
        setLoading(true)
        try {
            const data = await updateABug(bugId, { title, description, status, priority })
            console.log(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }


    const handleDeleteBug = async (bugId) => {
        setLoading(true)
        try {
            await deleteBug(bugId)
        } catch (error) {
            console.log(error.response.data.message)
        }
        finally {
            setLoading(false)
        }
    }

    const handleUpdateBugStatus = async (bugId, { status }) => {
        try {
            const data = await updateBugStatus(bugId, { status })
            console.log(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const handleGetMyAllBugs = async () => {
        try {
            const data = await myAllBugs()
            setMyBugs(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return ({
        bugs, loading, handleGetAllBugs, handleCreateBug, editBug, setEditBug, handleUpdateABug, handleDeleteBug, handleUpdateBugStatus, handleGetMyAllBugs, myBugs
    })
}