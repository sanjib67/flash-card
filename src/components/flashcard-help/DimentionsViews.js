import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import graphDimentions from '../../images/graph-dimensions.png';

export default class DimentionsViews extends Component {
  componentDidMount() {
    $('#menu-parent-1, #menu-child-5').addClass('active');
  }
  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Dimensions & Views</h1>
          <img src={graphDimentions} />
          <p>
            This part of Flashcard contains the Imes of selected Dimension (
            Corporation, Countries, Market and etc. ) from Slicer board -
            Metrics
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
        <div className='content-footer'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Bookmark Options</span>{' '}
              <a
                href='page-bookmark.php'
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
