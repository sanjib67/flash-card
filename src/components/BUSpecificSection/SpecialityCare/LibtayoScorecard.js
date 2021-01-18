import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import LibtayoData from "../../../data/BUspecificSection/LibtayoScore.json";

export default class LibtayoScorecard extends Component {
  state = {
    data: LibtayoData,
    tableColumns: [
      {
        name: "Country",
        width: 150,
      },
      {
        name: "Panels",
        width: 150,
      },
      {
        name: "Market sales",
        width: 150,
      },
      {
        name: "Finance: Internal sales",
        width:200,
      },
      {
        name: "Epi: Epidemiology",
        width: 150,
      },
      {
        name: "ATU: Awareness, usage and trial",
        width: 300,
      },
      {
        name: "Account",
        width: 150,
      },
      {
        name: "SFE (Sales force effectiveness)",
        width: 300,
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
        <h1>Libtayo Scorecard</h1>
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
