import React, { Component } from "react";
// import { Link } from "react-router-dom";
import GenmedScorecard from "../Genmed/GenmedScorecard";
import GenmedInformation from "../Genmed/GenmedInformation";
import TotalGenmedDef from "../Genmed/TotalGenmedDef";
import IUeConversionFactors from "../Genmed/IUeConversionFactors";
import AsiaScorecard from "../Genmed/AsiaScorecard";
import DCVandEp from "../Genmed/DCVandEp";
import TotalEp from "../Genmed/TotalEp";

export default class Genmed extends Component {
  state = {
    table: "genmed",
  };

  render() {
    return (
      <>
        <ul className="nav">
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "genmed" });
            }}
          >
            Genmed Scorecard
          </button>

          
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "totalgenmed" });
            }}
          >
            Total Genmed Def
          </button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "genmedinfo" });
            }}
          >
            Genmed Information
          </button>

          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "iueconversion" });
            }}
          >
            IUe Conversion Factors
          </button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "asiascorecard" });
            }}
          >
            Asia Scorecard
          </button>

          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "dcvandep" });
            }}
          >
            DCV and EP Market
          </button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "toatalep" });
            }}
          >
            Total EP
          </button>
          <br></br>
        </ul>
        {this.state.table === "genmed" ? (
          <GenmedScorecard />
        ) : this.state.table === "genmedinfo" ? (
          <GenmedInformation />
        ) : this.state.table === "totalgenmed" ? (
          <TotalGenmedDef />
        ) : this.state.table === "iueconversion" ? (
          <IUeConversionFactors />
        ) : this.state.table === "asiascorecard" ? (
          <AsiaScorecard />
        ) : this.state.table === "dcvandep" ? (
          <DCVandEp />
        ) : (
          <TotalEp />
        )}
      </>
    );
  }
}
