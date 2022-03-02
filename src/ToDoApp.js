import { useState, useContext, useReducer } from 'react'
import ReducerTodo from './ReducerTodo'
import TodoContext from './TodoContext'
const ToDoApp = () => {
    const [item, setItem] = useState("")
    const [status, setStatus] = useState("complete")
    const todoObject = useContext(TodoContext)
    const [state, dispatch] = useReducer(ReducerTodo, todoObject);
    const add = () => {
        dispatch({ type: "add", item: item, status: status });
    }
    const deleteThis = (indexToDel) => {
        dispatch({ type: "delete", index: indexToDel });
    }
    const clear = () => {
        dispatch({ type: "clear" });
    }
    return (
        <div>
            <div className='mainDiv' >
                <h1 style={{'fontSize':'50px', 'color':'white', 'textAlign':'center'}} >Todos App</h1>
                    <input 
                    type="text" 
                    name="item" 
                    placeholder="Your Todo" 
                    onInput={(event) => { setItem(event.target.value) }} 
                    />
                    <select name="status"  
                    onChange={(event) => { 
                        setStatus(event.target.value)
                         }}>
                        <option value="complete">complete</option>
                        <option value="incomplete">incomplete</option>
                    </select>
                    <br />
                        <button className='myBTN'  onClick={add}>Add</button>
                        <button  className='myBTN' onClick={clear}>Clear All</button>
            </div>
            <div>
                {state.map((val, index) => (
                    <div className='myText' >
                        <h4 >{val.item}</h4>
                        <h6>{val.status}</h6>
                        <button onClick={() => { deleteThis(index) }}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ToDoApp