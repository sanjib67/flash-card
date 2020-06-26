import React, { Component } from 'react';
import volumecalculation from '../../data/volumecalculation.json';
import RsuiteTable from '../../lib/RsuiteTable';

export default class VolumeCalculations extends Component {
  state = {
    searchValue: '',
    displayLength: 10,
    loading: false,
    page: 1,
    data: volumecalculation,
    tableColumns: [

      {
        name: 'Metrics',
        width: 180
      },
      {
        name: 'Description',
        width: 380
      },
      {
        name: 'Calculation',
        width: 400
      }
    ]
  };

  render() {
    return (
      <div className='content'>
        <h1>Volume Calculations</h1>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
