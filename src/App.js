import './App.css';
import {Provider} from "react-redux"
import store from "./store"
import {TodoListStore} from "./component/TodoList"
import {AddTodoForm} from "./component/AddTodo"
function App() {
  return (
    <Provider  store={store}>
      <TodoListStore />
      <AddTodoForm />
    </Provider>
  );
}

export default App;
