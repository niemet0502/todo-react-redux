import React from "react"
import {useDispatch} from "react-redux"


export function AddTodoForm(){
    const dispatch = useDispatch() 
    const input = useRef(null)

    

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tache" ref={input}/>
    </form>
}