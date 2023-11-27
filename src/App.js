import React, { useState, useRef} from "react";
import "../src/styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const App = () => {
  const [posts] = useState([
    {id: 1, title: 'LuluHana', body: 'tut choto drugoe'},
    {id: 2, title: 'LuluHana2', body: 'tut choto drugoe'},
    {id: 3, title: 'LuluHana3', body: 'tut choto drugoe'},
    {id: 4, title: 'LuluHana4', body: 'tut choto drugoe'},
    {id: 5, title: 'LuluHana5', body: 'tut choto drugoe'},
    {id: 6, title: 'LuluHana6', body: 'tut choto drugoe'}
])
  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)

  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста" />
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста" />
        <MyButton
        onClick={addNewPost}
        >Create Post</MyButton>
      </form>
      <PostList props={posts}/>
    </div>
  );
};
export default App;
