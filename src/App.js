import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import ListProducts from './components/ListProducts';
import {useSelector} from 'react-redux'

import Cart from './components/Cart';
function App() {
  const [products,setProducts]=useState([]);
  const [loader,setLoader]=useState(true);
  const ProductsInCart = useSelector(state=>state)
  useEffect(()=>{
    const getData = async()=>{
      await axios.get("https://fakestoreapi.com/products").then((response)=>{
        setProducts(response.data);
        setLoader(false);
      }
  ).catch((err)=>
  console.log(err))
    }
  getData();
  },[])

  return (
    <div className="App container-fluid">
      {
        loader ? 'loading' : <ListProducts  data={products} />
      }
      <br></br>
      <h1>Cart :</h1>
      <Cart products={ProductsInCart}/>
      
    </div>
  );
}

export default App;
