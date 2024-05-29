import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-20 bg-slate-800 flex justify-center gap-20 p-7 text-xl text-white'>
        <Link className=' hover:text-green-300' href="/" > Home</Link>
        <Link className=' hover:text-green-300' href="/product" > Product</Link>
        <Link className=' hover:text-green-300' href="/about" > About</Link>
        <Link className=' hover:text-green-300' href="/contact" >Contact</Link>

      
    </div>
  )
}

export default NavBar
