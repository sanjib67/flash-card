import React, { Component } from 'react';
import abbreviations from '../../data/abbreviations.json';
import RsuiteTable from '../../lib/RsuiteTable';


export default class Abbreviations extends Component {
  state = {
    searchValue: '',
    displayLength: 10,
    loading: false,
    page: 1,
    data: abbreviations,
    tableColumns: [
      {
        name: 'Abbreviation',
        width: 400
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
        <h1>Abbreviations</h1>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
