import React, { Component } from "react";
import flashcardmetrics from "../../data/flashcardmetrics.json";
import RsuiteTable from "../../lib/RsuiteTable";

export default class FlashcardMetrics extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: flashcardmetrics,
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
                width: 500
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Flashcard Metrics</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
