import React, { useState } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "LuluHana", body: "tut choto drugoe" },
    { id: 2, title: "LuluHana2", body: "tut choto drugoe" },
    { id: 3, title: "LuluHana3", body: "tut choto drugoe" },
    { id: 4, title: "LuluHana4", body: "tut choto drugoe" },
    { id: 5, title: "LuluHana5", body: "tut choto drugoe" },
    { id: 6, title: "LuluHana6", body: "tut choto drugoe" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts.sort((a,b) => a[sort].localeCompare(b[sort]))])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0px'}}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sorting by..."
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'},
        ]}
      />
      {posts.length ? (
        <PostList remove={deletePost} posts={posts} title="Post for JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Postov NET!</h1>
      )}
    </div>
  );
};
export default App;
