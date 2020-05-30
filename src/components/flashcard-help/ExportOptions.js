import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import graphExport2 from '../../images/graph-export-2.png';

export default class ExportOptions extends Component {
  componentDidMount() {
    $('#menu-parent-1, #menu-child-7').addClass('active');
  }
  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Export Features</h1>
          <img alt="" src={graphExport2} />
          <p>
            By using the export options, user can export the KPIs table and
            Chart to different formats like MS-PowerPoint, Excel and Outlook as
            well:
          </p>
          <ol>
            <li>By clicking here user can export the board table.</li>
            <li>By clicking here user will be able to export current chart.</li>
          </ol>
        </div>
        <div className='content-footer'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Flashcube: Slice & Dice Data</span>{' '}
              <a
                href='page-slice-dice.php'
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
