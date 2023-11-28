import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <div className='post'>
        <div className='post__content'>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
        </div>
        <div className='post__btns'> 
            <MyButton onClick={() => navigate(`/post/${props.post.id}`)}>Open</MyButton>
        </div>
        <div className='post__btns'> 
            <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>

      </div>
    )
}
export default Post;