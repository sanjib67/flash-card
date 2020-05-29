import React, { Component } from 'react'
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import { Table } from 'rsuite';
import dcv from '../../data/dcv.json';
const { Column, HeaderCell, Cell, Pagination } = Table;

export default class MarketDefinitionDcv extends Component {
    state = {
        displayLength: 10,
        loading: false,
        page: 1,
        data: dcv,
        tableColumns: [
          {
            name: "Category 5",
            width: 100
          },
          {
            name: "Category 4",
            width: 100
          },
          {
            name:  "Category 3",
            width: 100
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
            name: "Rx",
            width: 100
          },
          {
            name:"LC",
            width: 100
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
              <h1>Market Definition : DCV</h1>
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
