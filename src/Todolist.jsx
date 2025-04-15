import { TodoItem } from "./TodoItem"

export function Todolist({ todos, toggleTodo, deleteTodoItem }) {

return (
    <ul className="item-list">
            {todos.length === 0 && "No items found"}
            {todos.map( todo => {
                return (
                <TodoItem {...todo}
                 key={todo.id} toggleTodo={toggleTodo} deleteTodoItem={deleteTodoItem} />
                )
            })}
    </ul>
 )
}