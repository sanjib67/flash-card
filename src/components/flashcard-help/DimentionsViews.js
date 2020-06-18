import React, { Component } from 'react';
import graphDimentions from '../../images/graph-dimensions.png';

export default class DimentionsViews extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Dimensions & Views</h1>
        <img alt='' src={graphDimentions} />
        <p>
          This part of Flashcard contains the item of selected Dimension (
          Corporation, Countries, Market and etc. ) from Slicer board - Metrics
        </p>
        <ol>
          <li>
            User can toggle views by clicking here:{' '}
            <strong>Country/Market/Portofolio.</strong>{' '}
          </li>
          <li>
            Flashview and Charts will be updated by clicking any item here.
          </li>
        </ol>
      </div>
    );
  }
}
