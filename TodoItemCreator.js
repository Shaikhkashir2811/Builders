import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoliststate } from './Atom';

function TodoItemCreator() {
  const [inputvalue, setinputvalue] = useState('');
  const setTodoItem = useSetRecoilState(todoliststate);

  const onChange = (e) => {
    setinputvalue(e.target.value);
  };

  const onClick = () => {
    if (inputvalue.trim()) {
      setTodoItem((oldTodoItems) => [
        ...oldTodoItems,
        {
          id: oldTodoItems.length + 1,
          desc: inputvalue,
        },
      ]);
      setinputvalue('');
    }
  };

  return (
    <div className="d-grid gap-2">
      <input
        type="text"
        placeholder=""
        className="form-control"
        value={inputvalue}
        onChange={onChange}
      />
      <button className="btn btn-primary" type="button" onClick={onClick}>
        Save
      </button>
    </div>
  );
}

export default TodoItemCreator;
