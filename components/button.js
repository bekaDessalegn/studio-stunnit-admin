import React from 'react'

export default function Button({ name,padding, onClick }) {

    let padding_x = padding? padding: ''

    return (

        <div onClick={onClick} className={'bg-accentColor text-primaryColor uppercase rounded-lg mx-auto cursor-pointer hover:bg-amber-400 hover:text-black'+' '+padding_x }>
            <div className='mx-5 py-2 text-center'>
                {name}</div>
        </div>
    )
}
