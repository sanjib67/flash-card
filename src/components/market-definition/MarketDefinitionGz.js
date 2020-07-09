import React, { Component } from "react";
import RsuiteTable from "../../lib/RsuiteTable";
import gz from "../../data/gz.json";

export default class MarketDefinitionGz extends Component {
    state = {
        data: gz,
        tableColumns: [
            {
                name: "Category 5",
                width: 150
            },
            {
                name: "Category 4",
                width: 150
            },
            {
                name: "Category 3",
                width: 150
            },
            {
                name: "Category 2",
                width: 150
            },
            {
                name: "Category 1",
                width: 150
            },
            {
                name: "Category 0",
                width: 150
            },
            {
                name: "Molecules/ATC codes",
                width: 250
            },
            {
                name: "Euro",
                width: 100
            },
            {
                name: "SU",
                width: 100
            },
            {
                name: "TD",
                width: 100
            },
            {
                name: "TC",
                width: 100
            },
            {
                name: "PEq",
                width: 100
            },
            {
                name: "LC",
                width: 100
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1> Gz</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
