import React from 'react';

function EnterBar(props: { text: string, setText: React.Dispatch<React.SetStateAction<string>>, addToList: () => void }) {
    return (
        <div className='flex items-baseline justify-center gap-4 pt-8'>
            <input type="text" value={props.text} onChange={e => props.setText(e.target.value)} className="outline-none p-1 mr-2 text-orange-600  font-semibold border-2 border-orange-600" />
            <button className='border-2 border-orange-600 bg-orange-300 text-white p-1 px-4 rounded-xl' onClick={props.addToList}>add</button>
        </div>
    );
}

export default EnterBar;