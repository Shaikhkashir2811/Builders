import React from 'react';
import { filterState } from './Atom';
import { useSetRecoilState } from 'recoil';

function TodoItemFilter() {
  const setFilter = useSetRecoilState(filterState); // ✅ use the imported atom directly

  const onChange = (e) => setFilter(e.target.value);

  return (
    <div className="d-grid gap-2">
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

export default TodoItemFilter;
