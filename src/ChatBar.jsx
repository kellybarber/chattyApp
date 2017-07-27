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
    let prevName = oldName
    if (prevName === '') {
      prevName = 'Anonymous'
    }

    let post = {oldName: prevName, newName: newName, type: 'postMessage'}
    this.props.newMessage(post)
  }

  addMessage(message) {
    if (message.username === '') {
      message.username = 'Anonymous'
    }

    let post = {username: message.username, content: message.message}
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

// value={this.state.message}

// handleChange(event) {
//   if (event.key === "Enter") {
//     this.props.handleNewMessage(this.state.message)
//   } else if (event.key === "Backspace") {
//     this.setState({message: this.state.message.substring(0, this.state.message.length - 1)})
//   } else {
//     this.setState({message: this.state.message + event.key})
//   }
// }

// onKeyUp={this.handleChange.bind(this)}
