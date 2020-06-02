import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import graphExport2 from '../../images/graph-export-2.png';

export default class ExportOptions extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Export Features</h1>
        <img alt='' src={graphExport2} />
        <p>
          By using the export options, user can export the KPIs table and Chart
          to different formats like MS-PowerPoint, Excel and Outlook as well:
        </p>
        <ol>
          <li>By clicking here user can export the board table.</li>
          <li>By clicking here user will be able to export current chart.</li>
        </ol>
      </div>
    );
  }
}
