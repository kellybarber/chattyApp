import React from 'react'
import Message from './Message.jsx'
import Notification from './Notification.jsx'

class MessageList extends React.Component {
  render() {
    const messages = this.props.messages.map((value, index) => {
      if (value.type === 'incomingMessage') {
        return <Message key={index} message={value}/>
      } else {
        return <Notification key={index} message={value}/>
      }
    })
    return (
      <main className="messages">
        { messages }
        
      </main>
    )
  }
}
export default MessageList
