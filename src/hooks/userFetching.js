import { useState } from "react"

export const useFetching = (cb) => {
    const [isPostsLoading, setIsPostLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchPosts = async () => {
        try {
            setIsPostLoading(true)
            await cb()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsPostLoading(false)
        }
    }
    return [fetchPosts, isPostsLoading, error]
}