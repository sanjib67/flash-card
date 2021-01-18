import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import SarclisaData from "../../../data/BUspecificSection/SarclisaScore.json";

export default class SarclisaScorecard extends Component {
  state = {
    data: SarclisaData,
    tableColumns: [
      {
        name: "Country",
        width: 150,
      },
      {
        name: "Market sales",
        width: 150,
      },
      {
        name:"Finance: Internal sales",
        width: 200,
      },
      {
        name: "PEQ",
        width: 150,
      },
      {
        name: "SFE",
        width: 150,
      },
      {
        name: "Market access",
        width: 150,
      }
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Sarclisa Scorecard</h1>
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
