import { atom } from 'recoil';

const todoliststate = atom({
  key: 'todoliststate',
  default: [],
});

const filterState = atom({
  key: 'filterState',
  default: '',
});

export { filterState, todoliststate };
