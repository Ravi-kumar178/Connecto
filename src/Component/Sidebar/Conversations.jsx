import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../Hooks/useGetConversations'
import { getRandomEmoji } from '../../Utils/emojis';

const Conversations = () => {
  const{loading,conversations} = useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id}
                        conversation={conversation}
                        emoji = {getRandomEmoji()}
                        lastIdx = {idx === conversation.length-1}
          />
        ))
      } 


      <div>
      {
        loading && (<span className="loading loading-spinner loading-lg"></span>)
      }
      </div>
    </div>
  )
}

export default Conversations