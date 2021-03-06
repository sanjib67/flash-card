import React, { Component } from "react";
import panel from "../../data/panel.json";
import RsuiteTable from "../../lib/RsuiteTable";

export default class DataPanel extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: panel,
        tableColumns: [
            {
                name: "Country",
                width: 100
            },
            {
                name: "Sinergi Panel Mapping",
                width: 200
            },
            {
                name: "Country channel",
                width: 200
            },
            {
                name: "Flashcard channel",
                width: 200
            },
            {
                name: "Weight of channel within the total market (%)",
                width: 360
            },
            {
                name: "Panel coverage of the channel (%)",
                width: 250
            },
            {
                name: "Data Provider",
                width: 200
            },
            {
                name: "Market Definiton-ATC4/OTC4",
                width: 300
            },
            {
                name: "RX/OTC Split Availability",
                width: 300
            },
            {
                name: "Frequency",
                width: 100
            },
            {
                name: "CHC",
                width: 100
            },
            {
                name: "DB",
                width: 100
            },
            {
                name: "EP",
                width: 100
            },
            {
                name: "LLT",
                width: 100
            },
            {
                name: "LV",
                width: 100
            },
            {
                name: "PH",
                width: 100
            },
            {
                name: "VX",
                width: 100
            },
            {
                name: "GZ",
                width: 100
            },
            {
                name: "OC",
                width: 100
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Data Panel</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
