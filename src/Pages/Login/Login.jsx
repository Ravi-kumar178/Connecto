import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../Hooks/useLogin';

const Login = () => {

    const [userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const{loading,login} = useLogin()

    function submitHandler(e){
        e.preventDefault();
        login(userName,password);
    }


  return (
    <div className='flex flex-col justify-center items-center min-w-[384px] mx-auto'>
        <div className='py-4 pb-9 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login{"  "}
                <span className='text-blue-500'>Connecto</span>
            </h1>

            <form onSubmit={submitHandler}>
                <div className='w-[85%] mx-auto'>
                    <label htmlFor='userName' className=' label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input id='userName' value={userName} onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='Enter username'
                     className='w-full input input-bordered h-10 '
                    />
                </div>

                <div className='w-[85%] mx-auto'>
                    <label htmlFor='password' className=' label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input id='password' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password'
                     className='w-full input input-bordered h-10 '
                    />
                </div>
                 
                <div className='w-[85%] mx-auto'>
                    <Link
                     to={"/signup"}
                    className='text-sm px-2 hover:underline hover:text-blue-600 mt-2 inline-block'
                    >{"Don't"} have an account?
                    </Link>
                </div>
                
                <div  className='w-[85%] mx-auto'>
                    <button type='submit' disabled={loading} className='btn  btn-neutral btn-block btn-sm mt-2'>
                        {
                            loading?(<span className="loading loading-infinity loading-lg"></span>):("Login")
                        }
                    </button>
                </div>


            </form>
        </div>
    </div>
  )
}

export default Login