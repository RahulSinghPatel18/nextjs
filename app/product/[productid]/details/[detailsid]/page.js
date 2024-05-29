import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>this is a details of : {params.detailsid} page and of : {params.productid} page</h1>
    </div>
  )
}

export default page
