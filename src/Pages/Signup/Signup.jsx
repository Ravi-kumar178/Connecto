import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import UseSignup from '../../Hooks/UseSignup'

const Signup = () => {

    const [input,setInput] = useState({fullName:"",userName:"",password:"",confirmPassword:"",gender:""})

    const {signup,loading} = UseSignup();

    async function submitHandler(e){
        e.preventDefault();
      //  console.log(input);
        await signup(input);
    }

    const handleChangeboxChange = (gender) => {
        setInput({...input,gender});
    }

  return (
    <div className='flex flex-col justify-center items-center min-w-[384px] mx-auto'>
        <div className='py-4 pb-9 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
           <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup{"  "}
                <span className='text-blue-500'>Connecto</span>
            </h1>


            <form onSubmit={submitHandler}>
               <div className='w-[85%] mx-auto'>
                    <label htmlFor='fullname' className=' label p-2'>
                        <span className='text-base label-text'>Fullname</span>
                    </label>
                    <input type='text' autoComplete='name' id='fullname' placeholder='Enter fullname'
                     value={input.fullName} onChange={(e)=>setInput({...input,fullName:e.target.value})}
                     className=' w-[98%] mx-1 input input-bordered h-10 '
                    />
                </div>

                <div className='w-[85%] mx-auto'>
                    <label htmlFor='userName' className=' label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text'
                     id='userName'
                     autoComplete='username'
                     value={input.userName}
                     onChange={(e)=>setInput({...input,userName:e.target.value})}
                     placeholder='Enter username'
                     className=' w-[98%] mx-1 input input-bordered h-10 '
                    />
                </div>

                <div className='w-[85%] mx-auto'>
                    <label htmlFor='password' className=' label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password'
                     id='password'
                     autoComplete='new-password'
                    value={input.password}
                    onChange={(e)=>setInput({...input,password:e.target.value})}
                     placeholder='Enter Password'
                     className=' w-[98%] mx-1 input input-bordered h-10 '
                    />
                </div>

                <div className='w-[85%] mx-auto'>
                    <label htmlFor='confirmPassword' className=' label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input
                     id='confirmPassword'
                     autoComplete='new-password'
                    value={input.confirmPassword}
                    onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
                     type='password' placeholder='Enter Password'
                     className=' w-[98%] mx-1 input input-bordered h-10 '
                    />
                </div>

                {/* Gender checkbox */}
                <div className='w-[85%] mx-auto'>
                 <GenderCheckBox onCheckboxChange={handleChangeboxChange} selectGender={input.gender}/>
                </div>

                <div className='w-[85%] mx-auto'>
                    <Link
                    to={"/login"}
                    className='text-sm px-2 hover:underline hover:text-blue-600 mt-2 inline-block'
                    >Already have an account?
                    </Link>
                </div>

                <div className='w-[85%] mx-auto'>
                    <button type='submit' className=' btn  btn-neutral btn-block btn-sm mt-2'>
                        Signup
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup