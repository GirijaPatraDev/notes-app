import { useEffect, useState } from "react"

export default function Main() {

    const [text, setText] = useState(()=>localStorage.getItem('text') || '');
    const [chats, setChars] = useState(()=>(localStorage.getItem('text') || '').length);

    useEffect(()=>{
        
    }, [])
    return(
        <div>
            <textarea onChange={handleTextarea} /> <button onClick={handleClear}>clear</button>
        </div>
    )
}