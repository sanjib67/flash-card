import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import Difference from "../../../data/BUspecificSection/flashcardvsflashcube.json";

export default class ChcInformation extends Component {
  state = {
    data: Difference,
    tableColumns: [
      {
        name: "Flashcard attribute",
        width: 200,
      },
      {
        name: "Flashcube attribute",
        width: 200,
      },
    ],
  };

  render() {
    return (
      <div className="content col">
        <b>
        <br></br>
        <table>
          <colgroup span="3"></colgroup>
          <thead>
            <tr>
              <th scope="col"><h4>Category</h4></th>
               <th scope="col" colspan="1">
               <h4>Definition </h4>
              </th>
             
              <th colspan="3" scope="colgroup"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="1" scope="rowgroup">
                Panel
              </th>
              <th scope="row">
                Data sources containing different markets in the same country<br></br>
                (For example, Germany sends 3 panels such as GERMANY PTRI, DKM,
                Pharmascope. However, only GERMANY PTRI provides CHC sales data)
              </th>
            </tr>
          </tbody>
          <b><hr></hr></b>
          <br></br>
          <tbody>
            <tr>
              <th rowspan="1" scope="rowgroup">
                Channel
              </th>
              <th scope="row">
                Last intermediary between Manufacturer and the final user: where
                the patient gets the product, e.g.; Pharmacy, Mass Market,
                Ecommerce etc.
              </th>
            </tr>
          </tbody>
          <hr></hr>
          <br></br>
          <tbody>
            <tr>
              <th rowspan="1" scope="rowgroup">
                SISO <br></br>Analysis<br></br> (Sale in sale out analysis)
              </th>
              <th scope="row">
                SISO analysis is used to track wholesalers’ variation of stock
                by comparing the sales going out of Sanofi (SI = sell-in) to the
                sales going out of pharmacies and/or hospitals* <br></br>(SO = sellout)
                <br></br>Data sources: SI = Finance data (Sanofi), SO = third
                party data provider (ex : IQVIA)<br></br>Available for:<br></br>
                1. Sanofi CHC products<br></br>
                2. Product family and Mega category level
              </th>
            </tr>
          </tbody>
<hr></hr>
          <tbody>
            <tr>
              <th rowspan="2" scope="rowgroup">
                Entry<br></br> market
              </th>
              <th scope="row">Non Sanofi market</th>
              <b>
                <td style={{width:"500px"}}>
                  Market is selected irrespective of Sanofi products present in
                  the selected geography
                </td>
              </b>
            </tr>
            <tr>
              <th scope="row">Sanofi market</th>
              <td>
                {" "}
                <b>
                  Market is selected only when Sanofi products are present in
                  the selected geography
                </b>
              </td>
            </tr>
          </tbody>
<hr></hr>
          <tbody>
            <tr>
              <th rowspan="5" scope="rowgroup">
                Time Aggregation
              </th>

              <th scope="row">MTH</th>
              <b>
                <td>
                  Month : latest month of data received by the country (for the
                  selected metric). Level of aggregation on a period. Present in
                  monthly cube only
                </td>
              </b>
            </tr>
            <tr>
              <th scope="row">RQTR</th>
              <td>
                {" "}
                <b>
                  Rolling quarter : <br/> last 3 months of data (for the selected
                  metric)
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">R6M</th>
              <td>
                {" "}
                <b>
                  Rolling 6 months : last 6 months of data (for the selected
                  metric)
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">MAT</th>
              <td>
                {" "}
                <b>
                  Moving annual total : last 12 months data for the selected
                  metric
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">YTD</th>
              <td>
                {" "}
                <b>
                  Year to date : Period beginning the first month of the current
                  calendar up to the latest month data
                </b>
              </td>
            </tr>
          </tbody>
          <hr></hr>
          <tbody>
            <tr>
              <th rowspan="2" scope="rowgroup">
                Aligned vs latest time period
              </th>

              <th scope="row">Aligned</th>
              <b>
                <td>
                  Data on last period in commun that we received from countries
                  in the scope
                </td>
              </b>
            </tr>
            <tr>
              <th scope="row">Latest</th>
              <td>
                {" "}
                <b>Data on last period of each country received</b>
              </td>
            </tr>
          </tbody>
          
<hr></hr>
          <tbody>
            <tr>
              <th rowspan="3" scope="rowgroup">
              Corporation
              </th>
              <th scope="row">Corporation</th>
              <b>
                <td>
                International corporations cleaned, mapped and regrouped
                </td>
              </b>
            </tr>
            <tr>
              <th scope="row">Corporation (local)</th>
              <td>
                {" "}
                <b>
                The corporation raw data that we receive from DS without any modification
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">Manufacturer</th>
              <td>
                {" "}
                <b>
                Manufacturer names
                </b>
              </td>
            </tr>
          </tbody>

          <br></br>
          <br></br>
          <hr></hr>
          <tbody>
            <tr>
              <th rowspan="5" scope="rowgroup">
                Grouping
              </th>

              <th scope="row">Corporation 1</th>
              <b>
                <td>
                  International corporations cleaned, mapped and regrouped
                </td>
              </b>
            </tr>
            <tr>
              <th scope="row">Corporation 2</th>
              <td>
                {" "}
                <b>
                  Split on specific Multinational Corporations (MNC) or others
                  Multinational Corporations (Others MNCs) For example, at a
                  global level, the list of MNCs includes mainly Astrazeneca,
                  Bristol-Myers SQB, Glaxosmithkline, Johnson & Johnson, Lilly,
                  Merck & Co, Merck KGAA, Novartis, Pfizer, Sanofi At a global
                  level, the list of Others MNCs includes mainly Aspen, Bayer,
                  Mylan, Takeda, etc.
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">Product Group 1</th>
              <td>
                {" "}
                <b>
                  Product grouping defined by the name of the product or the
                  generic. This dimension can be used if products have different
                  names in the countries or if several products exist
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">Product Group 2</th>
              <td>
                {" "}
                <b>
                  Product grouping defined by the name of the family brand or
                  the name of the product or the generic
                </b>
              </td>
            </tr>
            <tr>
              <th scope="row">Product Group 3</th>
              <td>
                {" "}
                <b>Product grouping defined by the name of the molecule</b>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>

        <h3>Flashcard Vs Flashcube attributes</h3>
        <br></br>
        <RsuiteTable
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
        </b>
      </div>
    );
  }
}
