import React, { useState, useMemo } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "LuluHana", body: "tut 111 drugoe" },
    { id: 2, title: "dfr", body: "tut chotdfgo drugoe" },
    { id: 3, title: "sdfv", body: "tut ERTR drugoe" },
    { id: 4, title: "324", body: "tut dfg drugoe" },
    { id: 5, title: "sdfcxq", body: "tut choto drugoe" },
    { id: 6, title: "op", body: "tut choto druDFGDgoe" },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('Working')
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={deletePost} posts={sortedAndSearchedPosts} title="Post for JS" />
    </div>
  );
};
export default App;
