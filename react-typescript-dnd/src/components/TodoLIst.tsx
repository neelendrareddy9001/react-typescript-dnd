import React from 'react'
import { Todo } from './model'

interface Props {
    todos : Todo[],
}

const TodoLIst: React.FC<Props> = () => {
  return (
    <h3>Todolist</h3>
  )
}

export default TodoLIst