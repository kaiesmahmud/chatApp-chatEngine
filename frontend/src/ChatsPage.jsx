import React from 'react'
//For React-pretty-Chat UI
import {PrettyChatWindow} from 'react-chat-engine-pretty'

export const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId='2448873f-267b-41f7-b28b-1e4d1151401a'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
      />
    </div>
    
    )
  }

  // For React-chat-engine-advanced --- basic design
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
// export const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     '2448873f-267b-41f7-b28b-1e4d1151401a',
//     props.user.username,
//     props.user.secret
//     )
//   return (
//     <div style={{height: '100vh'}}>
//       <MultiChatSocket {...chatProps}/>
//       <MultiChatWindow {...chatProps} style={{height: '100%'}} />
//     </div>
    
//   )
// }
