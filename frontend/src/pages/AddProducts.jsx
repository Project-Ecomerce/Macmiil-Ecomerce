import React from 'react'

function AddProducts() {
  return (
    <div>
   
<div className="title flex justify-between   items-center bg-green-300">
  <h1 className='bg-red-500 p-1 px-2 text-white rounded-sm cursor-pointer m-2'>Go to Product</h1>
  <h1 className='p-10'>Add Products</h1>
  <h1 className='bg-green-500 p-1 px-2 text-white rounded-sm cursor-pointer m-4'>Publish Now</h1>
</div>

<div className="container p-5 border w-[1100px] m-10" >
<h1 className='p-3'>Product Title</h1>
<input className='p-3 w-[900px] outline-none border' type="" placeholder='text'/>

<h1 className='p-3'>Product Title</h1>
<input className='p-3 w-[900px] outline-none border' type="" placeholder='text'/>


<h1 className='p-3'>Product Title</h1>
<input className='p-3 w-[900px] outline-none border' type="" placeholder='text'/>

</div>

    </div>
  )
}

export default AddProducts