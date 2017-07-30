import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
    }
  }

  addStatus (oldName, newName) {
    if (oldName === newName) {
      return
    } else {
      let prevName = oldName
      if (prevName === '') {
        prevName = 'Anonymous'
      }

      let post = {oldName: prevName, newName: newName, type: 'postNotification'}
      this.props.newMessage(post)
    }
  }

  addMessage(message) {
    if (message.username === '') {
      message.username = 'Anonymous'
    }

    let post = {username: message.username, content: message.message, type: 'postMessage'}
    this.props.newMessage(post)
  }

  render() {
    return(
      <footer className="chatbar">
        <input className="chatbar-username"
          placeholder="Your Name (Optional)"
          onBlur={(event) => {
            const oldName = this.state.username
            this.state.username = event.target.value
            const newName = this.state.username
            this.addStatus(oldName, newName)
          }}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              this.state.message = event.target.value
              this.addMessage(this.state)
              event.target.value = ''
            }
          }}
        />
      </footer>
    )
  }
}
export default ChatBar
