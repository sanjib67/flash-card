import React, { Component } from "react";
import flashcubedimentions from "../../data/flashcubedimentions.json";
import RsuiteTable from "../../lib/RsuiteTable";

export default class FlashcubeDimentions extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: flashcubedimentions,
        tableColumns: [
            {
                name: "Category",
                width: 200
            },
            {
                name: "Group/ Item",
                width: 200
            },
            {
                name: "Description",
                width: 550
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Flashcube Dimensions</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
