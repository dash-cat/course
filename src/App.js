import React, { useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import '../src/styles/App.css'
import Post from './components/Post';

const App = () => {
    // const [value, setValue] = useState('Text into input')
    
    return (
        <div className='App'>
         <Post post={{id: 1, title: 'LuluHana', body: 'tut choto drugoe'}}/>
        </div>
    )
}
export default App;