import React from 'react';
import Header from './Header.jsx'
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?"
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  newMessage(message) {
    const messages = this.state.messages.concat(message);
    this.setState({messages})
  }

  render() {
    return (
      <div>
        <Header/>
        <MessageList
          messages = {this.state.messages}/>
        <ChatBar
          currentUser={this.state.currentUser}
          messages={this.state.messages}
          newMessage={this.newMessage.bind(this)}
        />
      </div>
    );
  }
}
export default App;



// handleNewMessage(msg) {
//   const newMessage = {id: 2, username: "Michelle", content: msg};
//   const messages = this.state.messages.concat(newMessage)
//   this.setState({messages: messages})
//   this.socket.send(JSON.stringify(newMessage))
// }
//
// componentDidMount() {
//   var ws = new WebSocket ("ws://localhost:3001")
//
//   this.socket = ws;
//
//   ws.onopen = (ev) => {
//     console.log("Connected to server!");
//
//     ws.send(JSON.stringify(this.state))
//   }
//
//
// }

// Plug into ChatBar to revert
// handleNewMessage={this.handleNewMessage.bind(this)}/>
