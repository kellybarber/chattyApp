import React from 'react';
import Message from './Message.jsx'

class MessageList extends React.Component {
  render() {
    const messages = this.props.messages.map((value, index) => {
      return <Message key={index} message={value}/>
    })
    return (
      <main className="messages">
        { messages }
        <div className="message system"></div>
      </main>
    )
  }
}
export default MessageList
