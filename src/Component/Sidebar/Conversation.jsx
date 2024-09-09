import React from 'react'

const Conversation = ({conversation,lastIdx,emoji}) => {

    

  return (
    <div className='flex gap-2 items-center rounded p-2 py-1 hover:bg-sky-500 cursor-pointer'>
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} loading='lazy' alt='user-avatar' />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
        {!lastIdx && <div className='divider'></div>}
    </div>
  )
}

export default Conversation