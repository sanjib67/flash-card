import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import graphFlashCube2 from '../../images/graph-flashcube-2.png'

export default class FlashcubeSliceDice extends Component {
  componentDidMount() {
    // $('#menu-parent-1, #menu-child-8').addClass('active');
  }
  render() {
    return (
      
              <div className='col-main-content'>
                <div className='content'>
                  <h1>Flashcube: Slice & Dice Data</h1>
                  <img alt="" src={graphFlashCube2} />
                  <p>
                    <strong>
                      By using this option, user can create the Flashcube in
                      excel:
                    </strong>
                  </p>
                  <ul>
                    <li>Flashcube is a click and decide tool.</li>
                    <li>
                      Flashcube provides options for the user to extract sales
                      data for further analysis.
                    </li>
                  </ul>
                </div>
                <div className='content-footer'>
                  <div className='mr-auto'>
                    <HelpfulButtons />
                  </div>
                  <div className='next-page'>
                    <p>
                      <span className='next-page-title'>
                        Market Definition: DCV
                      </span>{' '}
                      <a
                        href='page-market.php'
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
