import React, { Component } from 'react';
import RsuiteTable from '../../lib/RsuiteTable';
import chc from '../../data/chc.json';

export default class MarketDefinitionChc extends Component {
  state = {
    data: chc,
    tableColumns: [
      {
        name: 'Category 3',
        width: 150
      },
      {
        name: 'Category 2',
        width: 150
      },
      {
        name: 'Category 1',
        width: 150
      },
      {
        name: 'Category 0',
        width: 150
      },
      {
        name: 'Molecules/ATC codes',
        width: 250
      },
      {
        name: 'Molecules/OTC codes',
        width: 250
      },
      {
        name: 'Mnf Price - Euro',
        width: 100
      },
      {
        name: 'Public Price - Euro',
        width: 100
      },
      {
        name: 'Units (Pack Sold)',
        width: 100
      },
      {
        name: 'LC',
        width: 100
      }
    ]
  };

  render() {
    return (
      <div className='content'>
        <h1>Market Definition : CHC</h1>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}