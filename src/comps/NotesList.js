import { useEffect, useReducer, useState } from "react"
import { uid } from "uid";
import { initialState, reducer } from "../reducers/Reducer";

export default function NotesList(params) {
    const [notes, dispatch] = useReducer(reducer, initialState);
    /*const [notes, setNotes] = useState(()=>{
       return JSON.parse(localStorage.getItem('notes')) || [];
    });*/
    const [note, setNote] = useState({id: '', content: ''});
    
    const [chars, setChars] = useState(0);

    useEffect(() => {
        console.log('mounted');
        //localStorage.removeItem('notes');
    }, []);
    useEffect(() => {
        console.log('re-render');
    });
    useEffect(() => {
        console.log('notes inside useEffect ', notes);
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);
    const handleTextarea = (e)=>{
        setNote({
            id: uid(),
            content: e.target.value
        });
        setChars(e.target.value.length);
    }
    const handleSave = ()=>{
        if (note.content.trim() === '') {
            return;
        }
        console.log('note before saved', note);
        console.log('notes before setNotes', notes);
        dispatch({type: 'save', payload: note});
        console.log('notes after save dispatch', notes);
        setNote({id: '', content: '' });
        console.log('note after saved', note);
        setChars(0);
    }
    const handleClear = ()=>{
        setNote({id:'', content:''});
        setChars(0);
    }
    return(
        <div>
            <p>{chars} characters</p>
            <textarea value={note.content} onChange={(e)=>handleTextarea(e)} />
            <button onClick={handleSave}>save</button>
            <button onClick={handleClear}>clear</button>
            <ol>
                {
                    notes.map(element => 
                        <li key={element.id}>
                            {element.content}
                            <button onClick={()=>dispatch({type: 'delete', payload: element.id})}>delete</button>
                        </li>)
                }
            </ol>
        </div>
    )
}