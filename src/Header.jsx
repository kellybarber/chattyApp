import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="navbar" onClick={(event) => {console.log(this.props.userCount.number)}}>
        <a href="/" className="navbar-brand" >Chatty</a>
        <span className="navbar-counter">{this.props.userCount.number} Users Online</span>
      </header>

    )
  }
}

export default Header
