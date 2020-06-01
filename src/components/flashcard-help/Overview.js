import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import graphOverview2 from '../../images/graph-overview-2.png';

export default class Overview extends Component {
  componentDidMount() {
    // $('#menu-parent-1, #menu-child-1').addClass('active');
  }
  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Overview</h1>
          <img alt="" src={graphOverview2} />
          <ol>
            <li>
              <strong>
                <u>Header</u>:
              </strong>{' '}
              User can see the selected key parameters and latest time period
              here.
            </li>
            <li>Application version information.</li>
          </ol>
        </div>
        <div className='content-footer'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Flashview: Key KPIs</span>{' '}
              <a
                href='page-flashview.php'
                className='btn btn-outline-primary btn-arrow'>
                Next
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
