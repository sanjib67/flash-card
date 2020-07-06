import React, { Component } from "react";
import { Table, Input, InputGroup, Col, Grid, Row, Icon, Button } from "rsuite";
import XLSX from "xlsx";
const { Column, HeaderCell, Cell } = Table;
export default class RsuiteTable extends Component {
  state = {
    searchValue: "",
    loading: false
  };

  getData = () => {
    const { searchValue, sortColumn, sortType } = this.state;

    const { data } = this.props;

    // search sort pagination
    const filteredData = data.filter((eachRow) => {
      return Object.values(eachRow).join().toLowerCase().includes(searchValue.toLowerCase());
    });

    const sortedData = filteredData.sort((a, b) => {
      let x = a[sortColumn];
      let y = b[sortColumn];
      if (typeof x === "string") {
        x = x.charCodeAt();
      }
      if (typeof y === "string") {
        y = y.charCodeAt();
      }
      if (sortType === "asc") {
        return x - y;
      } else {
        return y - x;
      }
    });

    return { sortedData, filteredData };
  };

  downloadXLSX = (data) => {
    const filename = `${window.location.pathname.split("/").pop()}.xlsx`;
    const sheetName = "Table";
    /* generate worksheet */
    const ws = XLSX.utils.json_to_sheet(data);
    /* generate workbook and add worksheet */
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, filename);
  };

  iconRenderer = (eachColumn) => {
    switch (eachColumn) {
      case "Yes":
        return (
          <div key={JSON.stringify(eachColumn) + Date.now() + "div"}>
            <i key={JSON.stringify(eachColumn) + Date.now()} style={{ color: "#2ecc72" }} className='fas fa-check'></i>
          </div>
        );
      case "No":
        return (
          <div key={JSON.stringify(eachColumn) + Date.now() + "div"}>
            <i key={JSON.stringify(eachColumn) + Date.now()} style={{ color: "tomato" }} className='fas fa-times'></i>
          </div>
        );
      default:
        return (
          <div key={JSON.stringify(eachColumn) + Date.now() + "div"}>
            <div
              key={JSON.stringify(eachColumn) + Date.now()}
              dangerouslySetInnerHTML={{
                __html: JSON.parse(JSON.stringify(eachColumn) ? JSON.stringify(eachColumn).split("\\r\\n").join("<br/>") : null)
              }}
            />
          </div>
        );
    }
  };

  render() {
    const data = this.getData().sortedData;
    const { loading } = this.state;

    return (
      <div className='table-responsive'>
        <Grid fluid>
          <Row>
            <Col xs={24} sm={12} md={8}>
              <Button
                onClick={() => {
                  this.downloadXLSX(this.props.data);
                }}
                size='sm'>
                Export <i className='fas fa-download'></i>
              </Button>
            </Col>
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
          wordWrap={true}
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
                    color: "#535CA3",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}>
                  {eachColumn.name}
                </HeaderCell>
                <Cell dataKey={eachColumn.name}>{(rowData) => this.iconRenderer(rowData[eachColumn.name])}</Cell>
              </Column>
            );
          })}
        </Table>
      </div>
    );
  }
}
