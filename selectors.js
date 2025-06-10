import { selector } from 'recoil';
import { todoliststate, filterState } from './Atom';

const Todolistselectorstate = selector({
  key: 'todolistselectorstate',
  get: ({ get }) => {
    const todolist = get(todoliststate);
    const filter = get(filterState);
    return filter && filter.length > 0
      ? todolist.filter((todo) => todo.desc.toLowerCase().includes(filter.toLowerCase()))
      : todolist;
  },
});

export { Todolistselectorstate };
