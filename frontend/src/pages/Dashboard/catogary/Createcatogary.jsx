import React from 'react'

const Createcatogary = () => {
  return (
    <div className='header  mx-auto sm:w-[90%]'>
      
      {/* onSubmit={handleSubmit}  */}
    <form className='p-7 '>
     <div className=' bg-white  border shadow  p-9 sm:w-[100%] 
     '>
     <div className='text-[19px] mb-5 bg-gray-100 border  p-3' >
      <h1>Create new User</h1>
    </div>
    <div className=' ml-7 m-2'>
    <div className>
        <div >
          <label htmlFor='Name '>FirstName</label>
        </div>
        <div>
          <input
            // value={FirstName}
            // onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className=' px-2 py-2 rounded-[5px] w-[70%] outline-none border '
            placeholder=''
            id='Name'
            required
          />
        </div>
        <div/>
      
      </div>

    
    </div>
    <div className='ml-7'>
        <div >
          <label htmlFor='title'>LastName</label>
        </div>
        <div className=''>
          <input
            // value={LastName}
            // onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='px-2 py-2 rounded-[5px] w-[70%] outline-none border  '
            placeholder='Enter Last..'
            id='Price'
            required
          />
        </div>
      </div>
<div/>
     <div className='ml-7 m-2'>
        <div >
          <label htmlFor='Store'>Email</label>
        </div>
        <div>
          <input
            // value={Email}
            // onChange={(e) => setEmail(e.target.value)}
            type='text'
            className='px-2 py-2 rounded-[5px] w-[70%] outline-none border '
            placeholder='Store'
            id='Store'
            required
          />
        </div>
      </div>
      

      <div className='ml-7 '>
        <div>
          <label htmlFor='body'>Password</label>
        </div>
        <div>
        <input
            // value={Password}
            // onChange={(e) => setPassword(e.target.value)}
            type='text'
            className='px-2 py-2 rounded-[5px] w-[70%] outline-none border'
            placeholder='063'
            id='Price'
            required
          />
        </div>
      </div>

     
      <div>
        <button className='bg-green-600 hover:bg-slate-400 text-white font-bold py-3  px-7 rounded mt-3 ml-7'>
            create
        {/* {NewuserLoading ? (loading) : 'create'} */}
        </button>
      </div>
     </div>

      
    </form>
  </div>
  )
}

export default Createcatogary