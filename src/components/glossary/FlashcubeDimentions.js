import React, { Component } from 'react';
import flashcubedimentions from '../../data/flashcubedimentions.json';
import RsuiteTable from '../../lib/RsuiteTable';

export default class FlashcubeDimentions extends Component {
  state = {
    searchValue: '',
    displayLength: 10,
    loading: false,
    page: 1,
    data: flashcubedimentions,
    tableColumns: [
       

      {
        name: 'Category',
        width: 150
      },
      {
        name: 'Group/ Item',
        width: 200
      },
      {
        name: 'Description',
        width: 400
      }
    ]
  };

  render() {
    return (
      <div className='content'>
        <h1>Flashcube Dimentions</h1>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
