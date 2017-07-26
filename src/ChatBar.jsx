import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "blah b;ah"
    }
  }

  handleChange(event) {
    if (event.key === "Enter") {
      this.props.handleNewMessage(this.state.message)
    } else if (event.key === "Backspace") {
      this.setState({message: this.state.message.substring(0, this.state.message.length - 1 )})
    } else {
      this.setState({message: this.state.message + event.key})
    }
  }

  render() {
    return(
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name}/>
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyUp={this.handleChange.bind(this)}
          value={this.state.message}
        />
      </footer>
    )
  }
}
export default ChatBar
