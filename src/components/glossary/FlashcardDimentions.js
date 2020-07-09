import React, { Component } from "react";
import flashcarddimentions from "../../data/flashcarddimentions.json";
import RsuiteTable from "../../lib/RsuiteTable";

export default class FlascardDimentions extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: flashcarddimentions,
        tableColumns: [
            {
                name: "Category",
                width: 200
            },
            {
                name: "Field Name",
                width: 200
            },
            {
                name: "Description",
                width: 400
            },
            {
                name: "Example",
                width: 150
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Flashcard Dimentions</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
