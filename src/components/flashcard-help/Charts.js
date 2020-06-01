import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import graphCharts2 from '../../images/graph-charts-2.png';

export default class Charts extends Component {
  
  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Charts</h1>
          <img alt="" src={graphCharts2} />
          <p>
            <strong>
              This part of Flashcard contains the charts which provides detail
              information, trend over a period of time etc.
            </strong>
          </p>
          <p>
            User can toggle different Chart/KPIs by clicking on a small circle.
          </p>
          <ul>
            <li>
              <strong>Add or remove item icon (1)</strong> - This icon can be
              used to add or remove items in the graphs.
            </li>
            <li>
              <strong>Zoom in icon (2)</strong> - Graph can zoomed to full
              screen using this icon.
            </li>
            <li>
              <strong>Export to Excel or PPT (3)</strong> - Graph can be
              exported to Excel or PPT.
            </li>
          </ul>
        </div>
        <div className='content-footer'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Slicers Board</span>{' '}
              <a
                href='page-slice-board.php'
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
