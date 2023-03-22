import React from 'react'

import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

export const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '2448873f-267b-41f7-b28b-1e4d1151401a',
    props.user.username,
    props.user.secret
    )
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    
  )
}
