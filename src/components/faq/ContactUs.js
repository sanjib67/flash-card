import React, { Component } from 'react';
import contactUs from './../../images/contact-us.png';

export default class ContactUs extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Contact Us</h1>
        <img alt='' src={contactUs} />
      </div>
    );
  }
}
