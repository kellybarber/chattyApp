import React from 'react';
import Header from './Header.jsx'
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentUser: {name: "Bob"},
      messages: []
    }
  }

  componentDidMount() {
    const wss = new WebSocket('ws://localhost:3001')
    this.wss = wss

    wss.onopen = (event) => {
      console.log('connected');
    }

    wss.onmessage = (event) => {
      console.log(event);
    }

  }

  newMessage(message) {
    const lastMessage = message;
    const messages = this.state.messages.concat(message);
    this.setState({messages})
    this.wss.send(JSON.stringify(lastMessage))
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
