import { useReducer } from "react";
import TodoReducer from "./TodoReducer";
import TodoReducerButtons from "./TodoReducerButtons";
import TodoReducerContext from "./TodoReducerContext";
import ShowTodo from "./ShowTodo";

const TodoUseReducer = () => {
    const initialValue = [{ item: "Play Chess", status: "complete" }]
    const [state, dispatch] = useReducer(TodoReducer, initialValue);
    const reducerValue = { state, dispatch };
    return (
        <div className="App-div">
            <h1 className="headerinfo">Simple Todo App</h1>
            <TodoReducerContext.Provider value={reducerValue}>
                <input type="text" name="item" /><br />
                <select name="status">
                <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>   
                </select>
                <TodoReducerButtons />
                <ShowTodo />
                
            </TodoReducerContext.Provider>
        </div>
    );
};
export default TodoUseReducer;