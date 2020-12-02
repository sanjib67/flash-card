import React, { Component } from "react";
import RsuiteTable from "../../lib/RsuiteTable";
import totalgenmed from "../../data/totalgenmed.json";

export default class MarketDefinitionChc extends Component {
    state = {
        data: totalgenmed,
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
                name: "EU (MNF)",
                width: 100
            },
            {
                name: "SU",
                width: 100
            },
            {
                name: "IU",
                width: 100
            },
            {
                name: "IUt",
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
                name: "Rx (Available for US and Canada)",
                width: 260
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
                <h1>Total Genmed</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}