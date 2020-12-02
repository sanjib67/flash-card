import React, { Component } from 'react';
import solutionecLogo from '../images/logo-black.png';
import {Link} from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='bg-primary'>
          <div className='container'>
            <div className='cta-box'>
              <div className='mr-auto text-lg-left'>
                <p className='cta-text'>
                  Didn’t find what you were looking for? Have no worries, we’re
                  here to help you out!
                </p>
              </div>
              <div className='ml-auto'>
                <Link to='/help/landing-page/contact-us' className='btn btn-outline-white'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray'>
          <div className='container'>
            <div className='powered-box text-center'>
              <img alt='' src={solutionecLogo} />
              <p>Powered by Flashcard v4.4.32. Last updated 3/11/2020.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
