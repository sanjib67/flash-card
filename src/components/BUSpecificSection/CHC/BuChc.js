import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ChcMarket from "./ChcMarket";
import ChcInformation from "../../../components/BUSpecificSection/CHC/ChcInformation";
import Pdf from "../../../data/SISO Analysis_Deck_2020 February.pdf";

export default class BuChc extends Component {
  state = {
    table: "chcmarket",
  };

  render() {
    return (
      <>
        <ul className="nav">
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "chcmarket" });
            }}
          >
            CHC Market
          </button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "chcinfo" });
            }}
          >
            <button
            className="btns"
            onClick={() => {
              this.setState({ table: "chcinfo" });
            }}
          ></button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "chcinfo" });
            }}
          ></button>
            CHC Information
          </button>
          &nbsp;
          &nbsp;
          <a className="btns" style={{height:"5px"}} href={Pdf} target="_blank">
            SISO
          </a>
          <br></br>
        </ul>
        {this.state.table === "chcmarket" ? <ChcMarket /> : <ChcInformation />}
      </>
    );
  }
}
