import React, { Component } from "react";
import RsuiteTable from "../../lib/RsuiteTable";
import vx from "../../data/vx.json";

export default class MarketDefinitionPast extends Component {
    state = {
        data: vx,
        tableColumns: [
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
                name: "LC",
                width: 100
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1> Pasteur</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
