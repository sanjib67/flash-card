import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import graphSlicer from '../../images/graph-slicer.png'

export default class SlicersBoard extends Component {
  componentDidMount() {
  }
  render() {
    return (
              <div className='col-main-content'>
                <div className='content'>
                  <h1>Slicers Board</h1>
                  <img alt="" src={graphSlicer} />
                  <p>
                    This component is Flashcard Slicers provide buttons that
                    user can click to filter report. In addition to quick
                    filtering, slicers also indicate the current filtering
                    state, which makes it easy to understand what exactly is
                    shown in the Flashcard. <br />
                    It contains the following Slicers:
                  </p>
                  <ul>
                    <li>
                      <strong>Country</strong>
                    </li>
                    <li>
                      <strong>Market</strong>
                    </li>
                    <li>
                      <strong>Product</strong>
                    </li>
                    <li>
                      <strong>Metrics</strong>
                    </li>
                  </ul>
                </div>
                <div className='content-footer'>
                  <div className='mr-auto'>
                    <HelpfulButtons />
                  </div>
                  <div className='next-page'>
                    <p>
                      <span className='next-page-title'>Dimensions & Views</span>{' '}
                      <a
                        href='page-dimensions.php'
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
