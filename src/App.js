import TodoContext from './TodoContext';
import ToDoApp from './ToDoApp';
const App = ()=>  {
  const myTodos=[{ item: "Play", status: "Complete" }]
  return (
    <div>
      <TodoContext.Provider value={myTodos}>
        <ToDoApp />
      </TodoContext.Provider>
      
    </div>
  );
}
export default App;