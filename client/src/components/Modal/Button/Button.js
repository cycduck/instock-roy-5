import React from 'react';
// attempt on reusable components
// assumpt that I will take 3 props, classname onclick name as props

export default class Button extends React.Component {

  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>{this.props.name}</button>
    )
  }
}