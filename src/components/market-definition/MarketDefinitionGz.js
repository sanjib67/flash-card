import React, { Component } from 'react'
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import RsuiteTable from '../../lib/RsuiteTable';
import gz from '../../data/gz.json';

export default class MarketDefinitionGz extends Component {
    
    state = {
        data: gz,
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
            name:"TD",
            width: 100
          }
          ,{
            name:  "TC",
            width: 100
          },
          {
            name: "PEq",
            width: 100
          },
          {
            name:"LC",
            width: 100
          }
        ]
      };
      
      componentDidMount() {
        $('#menu-parent-3, #menu-child-3-1').addClass('active');
      }
    
      render() {
        return (
          <div className='col-main-content'>
            <div className='content'>
              <h1>Market Definition : Gz</h1>
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
