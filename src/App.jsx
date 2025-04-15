import { useEffect, useState } from 'react'
import './App.css'
import { NewFormItem } from './newFormItem'
import { Todolist } from './Todolist'

function App() {
  
  const [todos, settodos] = useState(() => {
    const storedTodos = localStorage.getItem("Items")
    if (storedTodos == null) {
      return []
    } else {
      return JSON.parse(storedTodos)
    }
  })

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos))
  })

  function addTodo(title) {
    settodos(prevTodos => {
      return [...prevTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  function toggleTodo(id, completed) {
    settodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodoItem(id) {
    settodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      < NewFormItem passFn = {addTodo} />
      < Todolist todos = {todos} toggleTodo={toggleTodo} deleteTodoItem={deleteTodoItem} />
    </>
  )
}

export default App
