import React from 'react'

const Conversation = () => {
  return (
    <div className='flex gap-2 items-center rounded p-2 py-1 hover:bg-sky-500 cursor-pointer'>
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' loading='lazy' alt='user-avatar' />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>John Doe</p>
                <span className='text-xl'>🎃</span>
            </div>
        </div>
        <div className='divider'></div>
    </div>
  )
}

export default Conversation