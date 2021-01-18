import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import SarclisaInfo from "../../../data/BUspecificSection/Sarclisainfo.json";

export default class SarclisaInformation extends Component {
  state = {
    data: SarclisaInfo,
    tableColumns: [
      {
        name:  "Category",
        width: 150,
      },
      {
        name:  "Parameter",
        width: 300,
      },
      {
        name: "Details",
        width: 300,
      }
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Sarclisa Information</h1>
        <RsuiteTable
          wordWrap={true}
          virtualized={true}
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
