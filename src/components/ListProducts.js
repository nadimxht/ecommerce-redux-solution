import React from 'react'
import Product from './Product'

export default function ListProducts({data}) {
  return (
    <div>
        {
            data.map((e,key)=>(
                <Product key={key} prod={e} />
            ))
        }
    </div>
  )
}
