import React, { useState } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "LuluHana", body: "tut 111 drugoe" },
    { id: 2, title: "dfr", body: "tut chotdfgo drugoe" },
    { id: 3, title: "sdfv", body: "tut ERTR drugoe" },
    { id: 4, title: "324", body: "tut dfg drugoe" },
    { id: 5, title: "sdfcxq", body: "tut choto drugoe" },
    { id: 6, title: "op", body: "tut choto druDFGDgoe" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('Work function sort')
    if (selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }
  }

  const sortedposts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0px'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          plaseholder="Search..."
        />
      </div>
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
        <PostList remove={deletePost} posts={sortedposts} title="Post for JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Postov NET!</h1>
      )}
    </div>
  );
};
export default App;
