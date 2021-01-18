import React, { Component } from "react";
import vaccine from "../../data/BUspecificSection/vaccine.json";
import RsuiteTable from "../../lib/RsuiteTable";

export default class BuVaccine extends Component {
    state = {
        searchValue: "",
        displayLength: 10,
        loading: false,
        page: 1,
        data: vaccine,
        tableColumns: [
            {
                name: "Country",
                width: 100
            },
            {
                name: "Market sales",
             
                width: 100
            },
            {
                name: "Panels",
               
                width: 100
            }
        ]
    };

    render() {
        return (
            <div className='content'>
                <h1>Vaccine</h1>
                <RsuiteTable wordWrap={true} virtualized={true} data={this.state.data} tableColumns={this.state.tableColumns} />
            </div>
        );
    }
}
