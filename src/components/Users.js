import React from 'react'
import User from './User'
export default function Users({UsersData,title}) {
    return (
        <div>
            <h1>{title}</h1>
            {
                UsersData.map(element=>(
                    <User info={element} />
                ))
            }
        </div>
    )
}
