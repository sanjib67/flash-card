import React, { Component } from 'react'
import HelpfulButtons from '../HelpfulButtons';

import RsuiteTable from '../../lib/RsuiteTable';
import dupixent from '../../data/dupixent.json';

export default class MarketDefinitionDup extends Component {
   
    state = {
        data: dupixent,
        tableColumns: [
         
          {
            name:  "Category 3",
            width: 150
          },
          {
            name: "Category 2",
            width: 150
          },
          {
            name: "Category 1",
            width: 150
          },
          {
            name: "Category 0",
            width: 150
          },
          {
            name: "Molecules/ATC codes",
            width: 250
          },
          {
            name: "Euro",
            width: 100
          },
          {
            name:  "VL",
            width: 100
          },
          {
            name:  "Peq",
            width: 100
          },
        ]
      };
      
      
    
      render() {
        return (
          <div className='col-main-content'>
            <div className='content'>
              <h1>Market Definition : Dupixent</h1>
              <RsuiteTable data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
            <div className='content-footer mt-30'>
              <div className='mr-auto'>
                <HelpfulButtons />
              </div>
              <div className='next-page'>
                <p>
                  <span className='next-page-title'>Price Detail</span>{' '}
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
