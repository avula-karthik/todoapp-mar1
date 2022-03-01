import TodoReducerContext from "./TodoReducerContext";
import { useContext } from "react";

const ShowTodo = () => {
    const reducerValue = useContext(TodoReducerContext);
    return(
        <div>
            {reducerValue.state.map((val, index) => {
            return (
                <div className="datashow">
                    Todo : {val.item}<br />
                    Status : {val.status} <br />
                    <button  className="btn btn-danger" 
                    onClick={() => { reducerValue.dispatch({ type: "remove", payload: index }) }}>
                        remove</button>
                </div>
            )
        })}
        </div>
    )
};
export default ShowTodo;