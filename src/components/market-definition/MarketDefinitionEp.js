import React, { Component } from 'react'
import HelpfulButtons from '../HelpfulButtons';
import RsuiteTable from '../../lib/RsuiteTable';
import ep from '../../data/ep.json';

export default class MarketDefinitionEp extends Component {
    state = {
        data: ep,
        tableColumns: [
          {
            name: "Category 5",
            width: 150
          },
          {
            name: "Category 4",
            width: 150
          },
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
            name:  "SU",
            width: 100
          },
          {
            name:  "IU",
            width: 100
          },
          {
            name: "IUt",
            width: 100
          },
          {
            name:"TD",
            width: 100
          }
          ,
          {
            name:  "TC",
            width: 100
          },
          {
            name: "Rx (Available only for US)",
            width: 210
          },
          {
            name:"LC",
            width: 100
          }
        ]
      };
      
      
    
      render() {
        return (
          <div className='col-main-content'>
            <div className='content'>
              <h1>Market Definition : EP</h1>
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
