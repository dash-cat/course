import React, { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      
    </div>
  );
};
export default PostForm;
