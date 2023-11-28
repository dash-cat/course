import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import PostService from "../components/API/PostService";
import { useFetching } from "../hooks/userFetching";
import Loader from "../components/UI/Loader/Loader";

const User = (props) => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPosts, isPostsLoading, error] = useFetching(async() => {
        const responce = await PostService.getPostById(params.id)
        setPost(responce.data)
    })

    const [fetchComment, isCommentloading, commentError] = useFetching(async() => {
        const responce = await PostService.getCommentsById(params.id)
        setComments(responce.data)
    })

    useEffect(()=>{
        fetchPosts(params.id)
        fetchComment(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста {params.id}</h1>
            {
            isPostsLoading
            ? <Loader/> 
            : <div> {post.id}{post.title}{post.body}</div>
            }
            <h1>
                Комментарии
            </h1>
            {
                isCommentloading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: '15px'}}>
                           <h5>{comm.email}</h5> 
                           <div>{comm.body}</div>
                        </div>
                        )}
                </div>
            }
        </div>
    )
}
export default User;