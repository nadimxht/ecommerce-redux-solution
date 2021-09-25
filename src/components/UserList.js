import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import User from './User'

export default function UserList({data,func}) {
    return (
        <div>
            {
                data.map(element => 
                  (<User dataUser={element} funct={func} />)   
                )
            }
           
        </div>
    )
}
