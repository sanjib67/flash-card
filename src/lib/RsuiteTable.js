import React, { Component } from 'react';
import { Table, Input, InputGroup, Col, Grid, Row, Icon } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

export default class RsuiteTable extends Component {
  state = {
    searchValue: '',
    displayLength: 10,
    loading: false,
    page: 1
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
    const {
      searchValue,
      displayLength,
      page,
      sortColumn,
      sortType
    } = this.state;
    const { data } = this.props;

    // search sort pagination
    const filteredData = data.filter((eachRow) => {
      return Object.values(eachRow)
        .join()
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    const sortedData = filteredData
      .sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      })
      .filter((v, i) => {
        const start = displayLength * (page - 1);
        const end = start + displayLength;
        return i >= start && i < end;
      });

    return { sortedData, filteredData };
  };

  iconRenderer = (eachColumn) => {
    switch (eachColumn) {
      case 'R':
        return <i style={{ color: '#2ecc72' }} className='fas fa-check'></i>;
      case 'S':
        return <i style={{ color: 'tomato' }} className='fas fa-times'></i>;
      default:
        return eachColumn;
    }
  };

  render() {
    const data = this.getData().sortedData;
    const { loading, displayLength, page } = this.state;

    return (
      <div className='table-responsive'>
        <Grid fluid>
          <Row>
            <Col xs={24} sm={12} md={8}></Col>
            <Col xs={24} sm={12} md={8}></Col>
            <Col xs={24} sm={12} md={8}>
              <InputGroup size='sm' inside style={{ marginBottom: 10 }}>
                <Input
                  onChange={(searchValue) => {
                    this.setState({ searchValue });
                  }}
                  placeholder='Search'
                />
                <InputGroup.Button>
                  <Icon icon='search' />
                </InputGroup.Button>
              </InputGroup>
            </Col>
          </Row>
        </Grid>
        <Table
          height={500}
          data={data}
          loading={loading}
          sortColumn={this.state.sortColumn}
          sortType={this.state.sortType}
          onSortColumn={(sortColumn, sortType) => {
            this.setState({ sortColumn, sortType });
          }}>
          {this.props.tableColumns.map((eachColumn) => {
            return (
              <Column key={eachColumn.name} width={eachColumn.width} sortable>
                <HeaderCell
                  style={{
                    color: '#535CA3',
                    fontWeight: 'bold',
                    fontSize: '15px'
                  }}>
                  {eachColumn.name}
                </HeaderCell>
                <Cell dataKey={eachColumn.name}>
                  {(rowData) => this.iconRenderer(rowData[eachColumn.name])}
                </Cell>
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
          total={this.getData().filteredData.length}
          onChangePage={this.handleChangePage}
          onChangeLength={this.handleChangeLength}
        />
      </div>
    );
  }
}
