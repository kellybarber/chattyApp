import React from 'React'

class Notification extends React.Component {
  render() {
    return (
      <div className="message system" >
        <span className="message-content">{this.props.message.content}</span>
      </div>
    )
  }
}
export default Notification
