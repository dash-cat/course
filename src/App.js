import React, { useState } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: "LuluHana", body: "tut choto drugoe" },
    { id: 2, title: "LuluHana2", body: "tut choto drugoe" },
    { id: 3, title: "LuluHana3", body: "tut choto drugoe" },
    { id: 4, title: "LuluHana4", body: "tut choto drugoe" },
    { id: 5, title: "LuluHana5", body: "tut choto drugoe" },
    { id: 6, title: "LuluHana6", body: "tut choto drugoe" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={deletePost} posts={posts} title='Post for JS'/>
    </div>
  );
};
export default App;
