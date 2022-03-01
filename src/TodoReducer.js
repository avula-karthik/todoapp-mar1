const TodoReducer = (state,action) => {
    if(action.type == "add"){
        return  [...state, action.payload];
    }
    if(action.type == "remove"){
        let modifiedState = state.filter((val,index)=>{
            if(index == action.payload){
                return false;
            }
            return true;
        })
        return modifiedState;
    }
    if(action.type == "clear"){
        return [];
    }
}
export default TodoReducer;