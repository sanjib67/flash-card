import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import graphFlashView from '../../images/graph-flashview.png';

export default class Flashview extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Flashview: Key KPIs</h1>
          <img alt="" src={graphFlashView} />
          <p>
            <strong>Flashview</strong> shows at a glance your selected item (
            product, corp…) performance in the selected market.
          </p>
          <ul>
            <li>
              <strong>Absolute Sales</strong> in Value or Volume based on
              selected metric,
            </li>
            <li>
              <strong>Market Share</strong>
            </li>
            <li>
              <strong>Market Share Change</strong> ( gain or loss )
            </li>
            <li>
              <strong>Growth vs. previous year</strong>
            </li>
          </ul>
        </div>
        <div className='content-footer'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Charts</span>{' '}
              <a
                href='page-charts.php'
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
