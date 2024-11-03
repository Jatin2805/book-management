import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const{
    register,
    handleSubmit,
    watch,
    forkState: {errors},

  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4'>
    <span>Email</span>
    <br />
    <input type="email" 
    placeholder='enter ur email' className="w-80 px-3 rounded-md outline-none"/>
    {...register("email", {required: true})}
    


    </div>
    <div className='mt-4'>
    <span>password</span>
    <br />
    <input type="password" 
    placeholder='enter ur password' className="w-80 px-3 rounded-md outline-none"/>
    {...register("password", {required: true})}


    </div>
    <div>
        <button className='px-3 py-2 rounded-md border-2  border-black courser-pointer  md:hover:bg-black   hover:text-white text-black'>Logn</button>
        <Link to={"/signup"}><button className='ml-40'>sign up</button></Link>
    </div>
  </div>
</dialog></div>
  )
}

export default Login