import React, { useState } from 'react';
import './Todolist.css';
import TodoItemFilter from './TodoItemFilter';
import TodoItemCreator from './TodoItemCreator';
import { Todolistselectorstate } from './selectors';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';

function TodoList() {
  const [createMode, setCreateMode] = useState(false);
  const onClick = () => setCreateMode(!createMode);
  const todoList = useRecoilValue(Todolistselectorstate);

  return (
    <div className="todolist">
      <h1 className="text-center">Todo List</h1>
      <button className="btn btn-success" onClick={onClick}>
        {createMode ? 'Back' : 'Add Todo'}
      </button>
      {createMode ? <TodoItemCreator /> : <TodoItemFilter />}
      {todoList?.map((todo, i) => (
  <li key={todo.id || i}>
    <TodoItem todo={todo} />
  </li>
))}

    </div>
  );
}

export default TodoList;