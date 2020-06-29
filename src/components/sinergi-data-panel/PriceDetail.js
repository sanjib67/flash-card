import React, { Component } from 'react';
import price from '../../data/price.json';
import RsuiteTable from '../../lib/RsuiteTable';

export default class PriceDetail extends Component {
  state = {
    searchValue: '',
    displayLength: 10,
    loading: false,
    page: 1,
    data: price,
    tableColumns: [
      {
        name: 'Country',
        width: 150
      },
      {
        name: 'Channel',
        width: 150
      },
      {
        name: 'Panel',
        width: 150
      },
      {
        name: 'Sell-In / Sell-Out',
        width: 150
      },
      {
        name: 'Manufacturer rate X Local data',
        width: 350
      },
      {
        name: 'Trade rate X Local data',
        width: 250
      },
      {
        name: 'Public Rate X Local data',
        width: 250
      },
      {
        name: 'Manufacturer Price in Local Data',
        width: 250
      },
      {
        name: 'B.20 Euro exchange rate',
        width: 200
      },
      {
        name: 'B.19 Euro exchange rate',
        width: 200
      },
      {
        name: 'ALL',
        width: 100
      },
      {
        name: 'CHC',
        width: 100
      },
      {
        name: 'DB',
        width: 100
      },
      {
        name: 'EP',
        width: 100
      },
      {
        name: 'LLT',
        width: 100
      },
      {
        name: 'LV',
        width: 100
      },
      {
        name: 'VX',
        width: 100
      },
      {
        name: 'GZ',
        width: 100
      },
      {
        name: 'OC',
        width: 100
      }
    ]
  };

  render() {
    return (
      <div className='content'>
        <h1>Price Detail</h1>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
