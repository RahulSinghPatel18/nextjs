import React from 'react'
import NavBar from '../componets/NavBar'
import ProductFlayer from '../componets/Register/ProductFlayer'

const layout = ({children}) => {
  return (
    <div>
      <h1>
      <NavBar/>
      <ProductFlayer/>
      {children}
      </h1>
    </div>
  )
}

export default layout
