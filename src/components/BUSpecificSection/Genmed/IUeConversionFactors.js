import React, { Component } from "react";
import XLSX from "xlsx";
import { Input, InputGroup, Icon, Button } from "rsuite";
import IueData from "../../../data/BUspecificSection/Iueconversion.json";

export default class IUeConversionFactors extends Component {
  state = {
    searchValue: "",
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

  getData = () => {
    const searchValue = this.state.searchValue;
    const data = IueData;

    // search sort pagination
    const filteredData = data.filter((eachRow) => {
      return Object.values(eachRow)
        .join()
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    const sortedData = filteredData.sort((a, b) => {
      return a - b;
    });

    return { sortedData, filteredData };
  };

  render() {
    const data = this.getData().sortedData;
    return (
      <>
        <InputGroup
          size="sm"
          inside
          style={{
            margin: "10px 0px 0px 654px",
            width: 220,
            textAlign: "right",
          }}
        >
          <Input
            onChange={(data) => {
              this.setState({ searchValue: data });
            }}
            placeholder="Search"
          />
          <InputGroup.Button>
            <Icon icon="search" />
          </InputGroup.Button>
        </InputGroup>
        <Button
          onClick={() => {
            this.downloadXLSX(IueData);
          }}
          size="sm"
        >
          Export <i className="fas fa-download"></i>
        </Button>
        <div style={{ overflow: "scroll", height: "500px" }}>
          <table class="tableizer-table">
            <thead style={{ color: "#535CA3" }}>
              <tr class="tableizer-firstrow">
                <th> Brand names</th>
                <th>&nbsp;</th>
                <td>&nbsp;</td>

                <th>Byetta</th>
                <th>Victoza</th>
                <th>Bydureon </th>
                <th>Lyxumia</th>
                <th>Trulicity</th>
                <th>Tanzeum</th>
                <th>All Brands</th>
                <th>Ozempic</th>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <th>Xultophy</th>
                <th>Soliqua Olive (3:1)(33)</th>
                <th>Soliqua Peach (2:1)(50)</th>
              </tr>
              <tr>
                <td colSpan="2">
                  <b>Molecules</b>
                </td>
                <td>&nbsp;</td>

                <td>
                  <b>Exenatide</b>
                </td>
                <td>
                  <b>Liraglutide</b>
                </td>
                <td>
                  <b>Exenatide</b>
                </td>
                <td>
                  <b>Lixisenatide</b>
                </td>

                <td>
                  <b>Dulaglutide</b>
                </td>
                <td>
                  <b>Albiglutide</b>
                </td>
                <td>
                  <b>Benaglutide</b>
                </td>
                <td>
                  <b>Semaglutide</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  <b>Degludec & Liraglutide</b>
                </td>
                <td>
                  <b>Glargine & Lixisenatide</b>
                </td>
                <td>
                  <b>Glargine & Lixisenatide</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <b>
                    Conversion factor<br></br> GLP-1/Insulin :
                  </b>{" "}
                </td>

                <td colSpan={7} style={{ textAlign: "center" }}>
                  <b>1 pen of GLP-1 product lasts for how many days?</b>
                </td>

                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <b>Countries</b>
                </td>
                <td>
                  <b>Lantus AVDD (T2D patients)</b>
                </td>
                <td>&nbsp;</td>
              
                <td>
                
                  <b>30</b>
                </td>
                <td>
                  <b>15</b>
                </td>
                <td>
                  <b>7</b>
                </td>
                <td>
                  <b>14</b>
                </td>
                <td>
                  <b>7</b>
                </td>
                <td>
                  <b>7</b>
                </td>
                <td>
                  <b>7</b>
                </td>
                <td>
                  <b>28</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  <b>9 + 300 IU</b>
                </td>
                <td>
                  <b>4,67 + 300 IU</b>
                </td>
                <td>
                  <b>7 + 300 IU</b>
                </td>
              </tr>
            </thead>
            <tbody>
            {data.map((data) => {
                return (
                  
                  <tr>
                    <td>{data.Countries}</td>
                    <td>{data["Lantus AVDD (T2D patients)"]}</td>
                    <td>&nbsp;</td>
                    {` `}
                    <td>{data["30"]}</td>
                    <td>{data["15"]}</td>
                    <td>{data["7"]}</td>
                    <td>{data["14"]}</td>
                    <td>{data["7"]}</td>
                    <td>{data["7"]}</td>
                    <td>{data["7"]}</td>
                    <td>{data["28"]}</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>{data["9 + 300 IU"]}</td>
                    <td>{data["4,67 + 300 IU"]}</td>
                    <td>{data["7 + 300 IU"]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
