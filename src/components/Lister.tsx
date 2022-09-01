import React from 'react';
import { todo } from '../typelist';
import Todo from './Todo';

function Lister(props: { list: todo[], setList: React.Dispatch<React.SetStateAction<any[]>> }) {
console.log("props lister ",props)

    const handleDone = (id: string) => {
        let tempList = [...props.list]
        let newList = tempList.map(el => {
            if (el.id == id) {
                el.progress='done'
            }
            console.log(el)
            return el
        })
        props.setList(newList)
    }

    const handleClear = (id: string) => {
        let tempList = [...props.list]
        let newList = tempList.filter(el => el.id != id)
        props.setList(newList)
    }

    return (
        <div className='flex flex-col items-baseline justify-center gap-4 pt-6'>
            {props.list.map(todo => {
                console.log("todo ",todo)
                return <Todo todoName={todo.todoName} id={todo.id} progress={todo.progress} done={() => { handleDone(todo.id) }} clear={() => { handleClear(todo.id) }} />
            })}
        </div>
    );
}

export default Lister;