const ReducerTodo = (state, action) => {
    if (action.type == "add") {
        let todoObject={
            item:action.item,
            status:action.status,
        }
        let newTodos=[...state, todoObject];
        return newTodos
    }
    if (action.type == "delete") {
        let newTodos = state.filter(function (val, index) {
            if (action.index == index) {
                return false
            }
            return true
        })
        return newTodos
    }
    if (action.type == "clear") {
        return ([])
    }
}
export default ReducerTodo;