import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import graphFlashCube2 from '../../images/graph-flashcube-2.png';

export default class FlashcubeSliceDice extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Flashcube: Slice & Dice Data</h1>
        <img alt='' src={graphFlashCube2} />
        <p>
          <strong>
            By using this option, user can create the Flashcube in excel:
          </strong>
        </p>
        <ul>
          <li>Flashcube is a click and decide tool.</li>
          <li>
            Flashcube provides options for the user to extract sales data for
            further analysis.
          </li>
        </ul>
      </div>
    );
  }
}
