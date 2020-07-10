import React, { Component } from "react";
import flashcubemetrics from "../../data/flashcubemetrics.json";
import RsuiteTable from "../../lib/RsuiteTable";

export default class FlashcubeMetrics extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: flashcubemetrics,
        tableColumns: [
            {
                name: "Category",
                width: 250
            },
            {
                name: "Group/ Item",
                width: 280
            },
            {
                name: "Description",
                width: 420
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Flashcube Metrics</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
