import React from 'react'

export default function User({dataUser,funct}) {
    return (
        <div>
            <h1>{dataUser.name}</h1>
            <h2>{dataUser.email}</h2>
            <button onClick={()=>{funct(dataUser.id)}}>click</button>
        </div>
    )
}
