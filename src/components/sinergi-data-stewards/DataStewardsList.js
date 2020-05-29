import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import { Table } from 'rsuite';
import dataStewardsList from '../../data/datastewardslist.json';
const { Column, HeaderCell, Cell, Pagination } = Table;
export default class DataStewardsList extends Component {
  state = {
    displayLength: 10,
    loading: false,
    page: 1,
    data: dataStewardsList,
    tableColumns: [
      {
        name: 'Country',
        width: 100
      },
      {
        name: 'Channel',
        width: 100
      },
      {
        name: 'Panel',
        width: 100
      },
      {
        name: 'Data Type',
        width: 150
      },
      {
        name: 'Name',
        width: 150
      },
      {
        name: 'Email',
        width: 250
      }
    ]
  };

  handleChangePage = (dataKey) => {
    this.setState({
      page: dataKey
    });
  };
  handleChangeLength = (dataKey) => {
    this.setState({
      page: 1,
      displayLength: dataKey
    });
  };

  getData = () => {
    const { displayLength, page } = this.state;
    return this.state.data.filter((v, i) => {
      const start = displayLength * (page - 1);
      const end = start + displayLength;
      return i >= start && i < end;
    });
  };

  componentDidMount() {
    $('#menu-parent-3, #menu-child-3-1').addClass('active');
  }

  render() {
    const data = this.getData();
    const { loading, displayLength, page } = this.state;
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Data Stewards List</h1>
          <div className='table-responsive'>
            <Table height={500} data={data} loading={loading}>
              {this.state.tableColumns.map((eachColumn) => {
                return (
                  <Column width={eachColumn.width}>
                    <HeaderCell
                      style={{
                        color: '#535CA3',
                        fontWeight: 'bold',
                        fontSize: '15px'
                      }}>
                      {eachColumn.name}
                    </HeaderCell>
                    <Cell dataKey={eachColumn.name} />
                  </Column>
                );
              })}
            </Table>
            <Pagination
              lengthMenu={[
                {
                  value: 10,
                  label: 10
                },
                {
                  value: 20,
                  label: 20
                }
              ]}
              activePage={page}
              displayLength={displayLength}
              total={this.state.data.length}
              onChangePage={this.handleChangePage}
              onChangeLength={this.handleChangeLength}
            />
          </div>
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
