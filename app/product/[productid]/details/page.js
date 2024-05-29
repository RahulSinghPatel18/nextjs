import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>This is details page of 😃: {params.productid} </h1>
    </div>
  )
}

export default page
