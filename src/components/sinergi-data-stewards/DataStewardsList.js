import React, { Component } from "react";
import dataStewardsList from "../../data/datastewardslist.json";
import RsuiteTable from "../../lib/RsuiteTable";
export default class DataStewardsList extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: dataStewardsList,
        tableColumns: [
            { name: "Country", width: 120 },
            {
                name: "Panel",
                width: 250
            },
            {
                name: "Data Type",
                width: 150
            },
            {
                name: "Name",
                width: 150
            },
            {
                name: "Email",
                width: 250
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Data Stewards List</h1>
                <RsuiteTable wordWrap={false} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
