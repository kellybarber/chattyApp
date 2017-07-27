import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: ""
    }
  }

  addMessage(message) {
    let post = {username: this.props.currentUser.name, content: message.message}
    this.props.newMessage(post)
  }

  render() {
    return(
      <footer className="chatbar">
        <input className="chatbar-username"
          placeholder="Your Name (Optional)"
          onBlur={(event) => {
            this.state.username = event.target.value
          }}
          defaultValue="Anonymous"/>
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              this.state.message = event.target.value
              this.addMessage(this.state)
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
