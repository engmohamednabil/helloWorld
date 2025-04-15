export function TodoItem({ completed, id, title, toggleTodo, deleteTodoItem })
{
return (
    <li>
                    <label>
                    <input type="checkbox" checked={completed} 
                    onChange={e => toggleTodo(id, e.target.checked)}/>
                    {title}
                    </label>
                    <button className="btn btn-danger" 
                    onClick={() => deleteTodoItem(id)}                
                    >Remove
                    </button>
                </li>
    )
}