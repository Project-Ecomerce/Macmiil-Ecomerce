import React from 'react'

const Updatesub = () => {
  return (
    <div className='header mx-auto sm:w-[100%] '>
      
    {/* onSubmit={updateHandler} */}
  <form  className=' mx-auto p-7 sm:w-[100%] '>
   <div className=' bg-white w-[100%] border mx-auto p-9 sm:w-[90%] 
   '>
   <div className='text-[24px] ml-7 bg-gray-100 p-3 hover:text-green-600' >
    <h1>Update User </h1>
  </div>
  <div className=' gap-[5rem] ml-7 mt-5'>
  <div className>
      <div >
        <label htmlFor='Name '>FirstName</label>
      </div>
      <div>
        <input
          // value={FirstName}
          // onChange={(e) => setFirstName(e.target.value)}
          type='text'
          className=' px-2 py-2  w-[90%] outline-none border  '
          placeholder=''
          id='Name'
          required
        />
      </div>
    </div>

    
  </div>
  <div className='ml-7'>
      <div >
        <label htmlFor='title'>LastName</label>
      </div>
      <div>
        <input
          // value={LastName}
          // onChange={(e) => setLastName(e.target.value)}
          type='text'
          className=' px-2 py-2 rounded-[5px] w-[90%] outline-none border'
          placeholder='063'
          id='Price'
          required
        />
      </div>
    </div>
    <div/>
   <div className='ml-7'>
      <div >
        <label htmlFor='Store'>Email</label>
      </div>
      <div>
        <input
          // value={Email}
          // onChange={(e) => setEmail(e.target.value)}
          type='text'
          className=' px-2 py-2 rounded-[5px] w-[90%] outline-none border'
          placeholder='063'
          id='Price'
          required
        />
      </div>
    </div>

    <div className='ml-7'>
      <div>
        <label htmlFor='body'>Password</label>
      </div>
      <div>
      <input
          // value={Password}
          // onChange={(e) => setPassword(e.target.value)}
          type='text'
          className=' px-2 py-2 rounded-[5px] w-[90%] outline-none border'
          placeholder='063'
          id='Price'
          required
        />
      </div>
    </div>

   
    <div>
      <button className='bg-green-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded mt-3 ml-7'>update
      {/* {NewuserLoading ? (loading) : 'Update'} */}
      </button>
    </div>
   </div>

    
  </form>
</div>
  )
}

export default Updatesub