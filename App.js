import './App.css'
import TodoList  from './Todolist';   
import React from 'react';
import { RecoilRoot } from 'recoil';
function App(){
  return(
    <>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </>
  );
}
export default App;