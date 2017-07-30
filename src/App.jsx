import React from 'react';
import Header from './Header.jsx'
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userCount: ''
    }
  }

  componentDidMount() {
    const wss = new WebSocket('ws://localhost:3001')
    this.wss = wss

    wss.onopen = (event) => {
      console.log('connected');
    }

    wss.onmessage = (event) => {
      let parsedMessage = JSON.parse(event.data)
      if (parsedMessage.type === 'incomingMessage') {
        let messages = this.state.messages.concat(parsedMessage)
        this.setState({messages})
      } else {
        this.state.userCount = parsedMessage
        this.forceUpdate()
      }
    }
  }

  newMessage(message) {
    const lastMessage = message
    this.wss.send(JSON.stringify(lastMessage))
  }

  render() {
    return (
      <div>
        <Header
          userCount = {this.state.userCount}
        />
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
