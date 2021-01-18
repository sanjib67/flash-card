import React, { Component } from "react";
// import { Link } from "react-router-dom";
import GzMarket from "../SpecialityCare/GzMarket";
import LibtayoScorecard from "../SpecialityCare/LibtayoScorecard";
import LibtayoInformation from "../SpecialityCare/LibtayoInformation";
import SarclisaScorecard from "../SpecialityCare/SarclisaScorecard";
import SarclisaInformation from "../SpecialityCare/SarclisaInformation";

export default class SpecialityCare extends Component {
  state = {
    table: "gzmarket",
  };

  render() {
    return (
      <>
        <ul className="nav">
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "gzmarket" });
            }}
          >
            GZ Market
          </button>

          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "libtayoscore" });
            }}
          >
            Libtayo Scorecard
          </button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "libtayoinfo" });
            }}
          >
            Libtayo Information
          </button>

          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "sarclisascore" });
            }}
          >
            Sarclisa Scorecard
          </button>
          <button
            className="btns"
            onClick={() => {
              this.setState({ table: "sarclisainfo" });
            }}
          >
            Sarclisa Information
          </button>

          <br></br>
        </ul>
        {this.state.table === "gzmarket" ? (
          <GzMarket />
        ) : this.state.table === "libtayoscore" ? (
          <LibtayoScorecard />
        ) : this.state.table === "libtayoinfo" ? (
          <LibtayoInformation />
        ) : this.state.table === "sarclisascore" ? (
          <SarclisaScorecard />
        ) : (
          <SarclisaInformation />
        )}
      </>
    );
  }
}
