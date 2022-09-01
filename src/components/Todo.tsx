import React from 'react';

function Todo(props: { todoName: string, progress: string, done: () => void, clear: () => void, id: string, }) {
    const todoClass = props.progress == 'done' ? 'line-through' : 'no-underline'
    return (
        <div className='flex items-baseline justify-center gap-4'>
            <p className={todoClass+" text-orange-600 text-xl "}>{props.todoName}</p>
            <button onClick={() => { props.done() }}>done</button>
            <button onClick={() => { props.clear() }}>clear</button>
        </div>
    );
}

export default Todo;