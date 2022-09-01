import React, { useState } from 'react';
import './App.css';
import EnterBar from './components/EnterBar';
import Header from './components/Header';
import Lister from './components/Lister';
import { todo } from './typelist';

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState<todo[]>([])


  const addToList = () => {
    let newList = [...list]
    let newTodo: todo = { "todoName": text, "progress": 'notDone', id: (Math.random() * 1000).toString() }
    newList.push(newTodo)
    setList(newList)
    console.log("addtolist called")
  }

  return (
    <div className='flex items-center justify-center pt-4 flex-col'>
      <Header />
      <EnterBar text={text} setText={setText} addToList={addToList} />
      <Lister list={list} setList={setList} />
    </div>

  );
}

export default App;
