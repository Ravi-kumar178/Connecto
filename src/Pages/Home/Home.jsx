import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import MessageContainer from '../../Component/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex  sm:h-[450px] md:h-[550px] bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home