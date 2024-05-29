import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1> This Dynamic id:  {params.productid}</h1>
    </div>
  )
}

export default page
