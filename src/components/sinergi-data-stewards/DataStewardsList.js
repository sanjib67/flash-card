import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import { Table,Input, InputGroup,Col,Grid,Row,Icon } from 'rsuite';
import dataStewardsList from '../../data/datastewardslist.json';
import RsuiteTable from '../../lib/RsuiteTable';
const { Column, HeaderCell, Cell, Pagination } = Table;
export default class DataStewardsList extends Component {
                 state = {
                   searchValue: '',
                   displayLength: 10,
                   loading: false,
                   page: 1,
                   data: dataStewardsList,
                   tableColumns: [
                     {
                       name: 'Country',
                       width: 100
                     },
                     {
                       name: 'Channel',
                       width: 100
                     },
                     {
                       name: 'Panel',
                       width: 100
                     },
                     {
                       name: 'Data Type',
                       width: 150
                     },
                     {
                       name: 'Name',
                       width: 150
                     },
                     {
                       name: 'Email',
                       width: 250
                     }
                   ]
                 };

                 handleChangePage = (dataKey) => {
                   this.setState({
                     page: dataKey
                   });
                 };
                 handleChangeLength = (dataKey) => {
                   this.setState({
                     page: 1,
                     displayLength: dataKey
                   });
                 };

                 getData = () => {
                   const {
                     searchValue,
                     displayLength,
                     page,
                     data,
                     sortColumn,
                     sortType = 'asc'
                   } = this.state;
                   // search sort pagination
                    
                   const filteredData = data.filter((eachRow) => {
                       return Object.values(eachRow)
                         .join()
                         .toLowerCase()
                         .includes(searchValue.toLowerCase());
                     })

                     const sortedData = filteredData.sort((a, b) => {
                       let x = a[sortColumn];
                       let y = b[sortColumn];
                       if (typeof x === 'string') {
                         x = x.charCodeAt();
                       }
                       if (typeof y === 'string') {
                         y = y.charCodeAt();
                       }
                       if (sortType === 'asc') {
                         return x - y;
                       } else {
                         return y - x;
                       }
                     })
                     .filter((v, i) => {
                       const start = displayLength * (page - 1);
                       const end = start + displayLength;
                       return i >= start && i < end;
                     });

                     return {sortedData,filteredData}
                 };

                 componentDidMount() {
                   $('#menu-parent-3, #menu-child-3-1').addClass('active');
                 }

                 render() {
                   const data = this.getData().sortedData;
                   const { loading, displayLength, page } = this.state;
                   return (
                     <div className='col-main-content'>
                       <div className='content'>
                         <h1>Data Stewards List</h1>
                         <RsuiteTable data={data} tableColumns={this.state.tableColumns} />
                       </div>
                       <div className='content-footer mt-30'>
                         <div className='mr-auto'>
                           <HelpfulButtons />
                         </div>
                         <div className='next-page'>
                           <p>
                             <span className='next-page-title'>
                               Price Detail
                             </span>{' '}
                             <a
                               href='page-charts.php'
                               className='btn btn-outline-primary btn-arrow'>
                               Next
                             </a>
                           </p>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
