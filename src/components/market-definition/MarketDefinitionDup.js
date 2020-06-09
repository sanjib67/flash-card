import React, { Component } from 'react';
import RsuiteTable from '../../lib/RsuiteTable';
import dupixent from '../../data/dupixent.json';

export default class MarketDefinitionDup extends Component {
  state = {
    data: dupixent,
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
        name: 'Euro',
        width: 100
      },
      {
        name: 'SU',
        width: 100
      },
      {
        name: 'Peq',
        width: 100
      }
    ]
  };

  render() {
    return (
      <div className='content'>
        <h1> Dupixent</h1>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
