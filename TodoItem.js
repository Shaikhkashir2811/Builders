import React from 'react';
import { useRecoilState } from 'recoil';
import { todoliststate } from './Atom';

function TodoItem(props) {
  const [list, setList] = useRecoilState(todoliststate);

  const onDelete = () => {
    const index = list.findIndex((item) => item.id === props.todo.id);
    if (index !== -1) {
      const updatedTodolist = [
        ...list.slice(0, index),
        ...list.slice(index + 1),
      ];
      setList(updatedTodolist);
    }
  };

  return (
    <>
      {props.todo.desc}{' '}
      <button onClick={onDelete} className="btn btn-danger">
        Delete
      </button>
    </>
  );
}

export default TodoItem;
