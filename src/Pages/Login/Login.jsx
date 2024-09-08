import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-[384px] mx-auto'>
        <div className='py-4 pb-9 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login{"  "}
                <span className='text-blue-500'>Connecto</span>
            </h1>

            <form>
                <div className='w-[85%] mx-auto'>
                    <label className=' label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username'
                     className='w-full input input-bordered h-10 '
                    />
                </div>

                <div className='w-[85%] mx-auto'>
                    <label className=' label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter password'
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
                    <button className='btn  btn-neutral btn-block btn-sm mt-2'>
                        Login
                    </button>
                </div>


            </form>
        </div>
    </div>
  )
}

export default Login