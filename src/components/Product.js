import React, { useEffect } from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Add , Modify} from '../redux/Actions'

const  Product=({key,prod})=> {
    const search=(tab)=>{
        var test = false ;
        tab.map(e=>e.id==prod.id? test = true : test=false);
        return test ;
    }
   
    const x = useSelector(state=>state);
    const dispatch = useDispatch();
    const Ajout=(e)=>{
        e.preventDefault();

        if(search(x)){
            console.log("includedd")
            dispatch(Modify(prod))
        }else{
            dispatch(Add(prod));
        }
        
        
        
        
        
    }
  return (
    <div style={{border:"1px solid black"}} key={key}>
        {console.log(x)}
        <h2>{prod.title}</h2>
        <p>{prod.price}</p>
        <button onClick={(e)=>Ajout(e)} >Add to cart</button>
    </div>
  )
}
export default Product;
