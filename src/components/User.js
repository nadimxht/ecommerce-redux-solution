import React from 'react'

export default function User({info}) {
    return (
        <div>
            <p>
                fullname : {info.fullName} 
            </p>
            
            <p>
                profession : {info.profession}
            </p>
            <br></br>

        </div>
    )
}
