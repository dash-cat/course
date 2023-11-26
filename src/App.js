import React, { useState } from 'react'

const App = () => {
    const [likes, setLikes] = useState(0)
    
    function incriment() {
        setLikes(likes + 1)
    }

    function decriment() {
        setLikes(likes - 1)
    }
    return (
        <div className='App'>
            <div>{likes}</div>
            <button onClick={incriment}>Incriment</button>
            <button onClick={decriment}>Decriment</button>
        </div>
    )
}
export default App;