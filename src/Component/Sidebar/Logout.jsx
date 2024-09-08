import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import UseLogout from '../../Hooks/UseLogout'

const Logout = () => {

  const{loading, logout} = UseLogout();

  return (
    <div className=''>
      {
        loading?(<span className="loading loading-ring loading-lg"></span>):(  <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer'/>)
      }
    </div>
  )
}

export default Logout