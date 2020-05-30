import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import dataStewardsList from '../../data/datastewardslist.json';
import RsuiteTable from '../../lib/RsuiteTable';
export default class DataStewardsList extends Component {
                 state = {
                   searchValue: '',
                   displayLength: 10,
                   loading: false,
                   page: 1,
                   data: dataStewardsList,
                   tableColumns: [
                     {      name: 'Country',
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

                


                 componentDidMount() {
                   $('#menu-parent-3, #menu-child-3-1').addClass('active');
                 }

                 render() {
                   return (
                     <div className='col-main-content'>
                       <div className='content'>
                         <h1>Data Stewards List</h1>
                         <RsuiteTable data={this.state.data} tableColumns={this.state.tableColumns} />
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
