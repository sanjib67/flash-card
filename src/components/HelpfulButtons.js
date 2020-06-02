import React, { Component } from 'react';
import happyIcon from '../images/sad.svg';
import sadIcon from '../images/sad-1.svg';

export default class HelpfulButtons extends Component {
  state = {
    yesClicked: false,
    noClicked: false
  };

  componentDidUpdate(){
    console.log(window.location.pathname);
    
  }

  render() {
    return (
      <p>
        Did you find it helpful?
        <span
          onClick={() => {
            if (!this.state.yesClicked && !this.state.noClicked)
              this.setState({ yesClicked: true });
          }}
          style={{ color: this.state.yesClicked ? '#2ecc72' : 'black' }}
          className='did-yes'>
          <i style={{ fontSize: '20px' }} className='far fa-smile d-inline'></i>{' '}
          <span className='d-inline'>Yes</span>
        </span>{' '}
        <span
          onClick={() => {
            if (!this.state.yesClicked && !this.state.noClicked)
              this.setState({ noClicked: true });
          }}
          style={{ color: this.state.noClicked ? 'tomato' : 'black' }}
          className='did-no'>
          <i style={{ fontSize: '20px' }} className='far fa-frown d-inline'></i>{' '}
          <span className='d-inline'>No</span>
        </span>
      </p>
    );
  }
}
