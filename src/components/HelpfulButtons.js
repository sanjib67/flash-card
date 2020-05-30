import React, { Component } from 'react';
import happyIcon from "../images/sad.svg"
import sadIcon from "../images/sad-1.svg"


export default class HelpfulButtons extends Component {
  render() {
    return (
      <p>
        Did you find it helpful?
        <a href='#' className='did-yes'>
          <img alt="" src={happyIcon} />
          <span>Yes</span>
        </a>{' '}
        <a href='#' className='did-no'>
          <img alt="" src={sadIcon} />
          <span>No</span>
        </a>
      </p>
    );
  }
}
