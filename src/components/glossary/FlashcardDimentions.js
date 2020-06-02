import React, { Component } from 'react';

export default class FlashcardDimentions extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Flashcard Dimensions</h1>
        <div className='table-responsive'>
          <table id='table_id' className='display'>
            <thead>
              <tr>
                <th>Category</th>
                <th>Field name</th>
                <th>Description</th>
                <th>Example</th>
                <th>note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Geography</td>
                <td>Cluster</td>
                <td>
                  Depends on the business requirements for identifying
                  priorities for CHC, GEM, EU, DB 1/2/3/4. For example, priority
                  1 countries for Diabetes will be in EU DB1.
                </td>
                <td>CHC</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Region</td>
                <td>Region classification as per Sanofi definition</td>
                <td>Europe</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Zone</td>
                <td>
                  Business geographic segmentation as per Sanofi definition -
                  sub-regions
                </td>
                <td>NOBA</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>MCO</td>
                <td>
                  Multi countries organization - group of countries based on BU
                  requirements
                </td>
                <td>Benelux</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Country</td>
                <td>Country name within the data</td>
                <td>Belgium</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Channel</td>
                <td>
                  Last intermediary between Manufacturer and the final user:
                  where the patient get the product, e.g.; Retail, Hospital
                </td>
                <td>Retail</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Cluster</td>
                <td>
                  Depends on the business requirements for identifying
                  priorities for CHC, GEM, EU, DB 1/2/3/4. For example, priority
                  1 countries for Diabetes will be in EU DB1.
                </td>
                <td>CHC</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Region</td>
                <td>Region classification as per Sanofi definition</td>
                <td>Europe</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Zone</td>
                <td>
                  Business geographic segmentation as per Sanofi definition -
                  sub-regions
                </td>
                <td>NOBA</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>MCO</td>
                <td>
                  Multi countries organization - group of countries based on BU
                  requirements
                </td>
                <td>Benelux</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Country</td>
                <td>Country name within the data</td>
                <td>Belgium</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Channel</td>
                <td>
                  Last intermediary between Manufacturer and the final user:
                  where the patient get the product, e.g.; Retail, Hospital
                </td>
                <td>Retail</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
