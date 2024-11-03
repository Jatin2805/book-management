import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
 <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
<div id="my_modal_3" className="flex h-screen items-center justify-center border shadow-md ">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">sign up</h3>
    <div className='mt-4'>
    <span>Email</span>
    <br />
    <input type="email" 
    placeholder='enter ur email' className="w-80 px-3 rounded-md outline-none"/>
    


    </div>
    <div className='mt-4'>
    <span>password</span>
    <br />
    <input type="password" 
    placeholder='enter ur password' className="w-80 px-3 rounded-md outline-none"/>
    


    </div>
    <div>
        <button className='px-3 py-2 rounded-md border-2  border-black courser-pointer  md:hover:bg-black   hover:text-white text-black'>already have an account</button>
        <Link to={"/"}><button className='ml-40'>login</button></Link>
    </div>
  </div>
</div></div>
  )
}

export default Signup