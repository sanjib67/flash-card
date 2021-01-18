import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import GenmedData from "../../../data/BUspecificSection/GenmedScoreCard.json";

export default class GenmedScoreCard extends Component {
  state = {
    data: GenmedData,
    tableColumns: [
      {
        name: "Country",
        width: 200,
      },
      {
        name: "Market sales",
        width: 200,
      },
      {
        name: "Panel names",
        width: 200,
      },
      {
        name: "Weekly sales",
        width: 200,
      },
      {
        name: "Promo/Share of voice",
        width: 200,
      },
      {
        name: "Forecast",
        width:300,
      },
      {
        name: "Patients",
        width: 200,
      },
      {
        name: "SIT (Stock in trade)",
        width: 200,
      }
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Genmed Scorecard</h1>
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
