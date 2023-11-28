import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/userFetching";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response.data)
    console.log(response.headers['x-total-count'])
    setTotalCount(response.headers['x-total-count'])
  })

  useEffect(()=> {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{marginTop: '40px'}} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostsLoading
      ? <div style={{display: "flex", justifyContent: "center", marginTop: '50px'}}><Loader/></div>
      : <PostList remove={deletePost} posts={sortedAndSearchedPosts} title="Post for JS" />
     }
      
    </div>
  );
};
export default App;
