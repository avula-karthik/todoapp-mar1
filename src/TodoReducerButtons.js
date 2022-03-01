import { useContext, useState} from "react";
import TodoReducerContext from "./TodoReducerContext";

const TodoReducerButtons = () => {
    const [detail, setDetail] = useState([])
    const { dispatch } = useContext(TodoReducerContext);
    return (
        <div>
            <button className="btn btn-primary m-3"
            onClick={(event) => {
                event.preventDefault();
                let todoObject = {
                    item: event.target.item.value,
                    status: event.target.status.value
                };
                let newTodo = [...detail, todoObject]
                setDetail(newTodo)
                dispatch({type:"add", payload: detail})
            }}>
                Add
            </button>
            <button  className="btn btn-primary" onClick={() => { dispatch({ type: "clear" }); }}>Clear All</button>
        </div>
    );
};
export default TodoReducerButtons;