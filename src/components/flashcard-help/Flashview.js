import React, { Component } from 'react';
import graphFlashView from '../../images/graph-flashview.png';

export default class Flashview extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Flashview: Key KPIs</h1>
        <img alt='' src={graphFlashView} />
        <p>
          <strong>Flashview</strong> shows at a glance your selected item (
          product, corp…) performance in the selected market.
        </p>
        <ul>
          <li>
            <strong>Absolute Sales</strong> in Value or Volume based on selected
            metric,
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
    );
  }
}
