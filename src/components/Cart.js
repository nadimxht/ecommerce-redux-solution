import React from 'react'
import {useDispatch} from 'react-redux'
import {Modify,decrement,Delete,Erase} from '../redux/Actions'

export default function Cart({products}) {
  const dispatch = useDispatch();
 

  return (
    <div>
      <button onClick={(event)=>{
        event.preventDefault();
        dispatch(Erase())
      }}>
        <h2>Erase</h2>
      </button>
        {products.map(e=>(<div>
          <p>{e.title}</p>
          <p>{e.price}</p>
          <button onClick={(event)=>{
            event.preventDefault();
            if(e.qt>0){
              dispatch(decrement(e))
            }
            
          }}>-</button>
          <p>{e.qt}</p>
          <button onClick={(event)=>{
            event.preventDefault();
            
            dispatch(Modify(e))
          }}>+</button>
          <button style={{backgroundColor:"red"}} onClick={(event)=>{
            event.preventDefault();
            dispatch(Delete(e));
          }}>
            X
          </button>
        </div>))}
    </div>
  )
}
