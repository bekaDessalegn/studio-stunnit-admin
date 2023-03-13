import React from 'react'

export default function Button({ name,padding }) {

    let padding_x = padding? padding: ''

    return (

        <div className={'bg-accentColor text-primaryColor uppercase rounded mx-auto'+' '+padding_x }>
            <div className='mx-5 py-2'>
                {name}</div>
        </div>
    )
}
