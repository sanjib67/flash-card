import React, { Component } from 'react';
import FlashcardDimentions from './glossary/FlashcardDimentions';
import { BrowserRouter,useLocation,Redirect , Route, Switch, Link } from 'react-router-dom';

import Home from './Home';

import Overview from './flashcard-help/Overview';
import Flashview from './flashcard-help/Flashview';
import Charts from './flashcard-help/Charts';
import BookmarkOptions from './flashcard-help/BookmarkOptions';
import DimentionsViews from './flashcard-help/DimentionsViews';
import ExportOptions from './flashcard-help/ExportOptions';
import FlashcubeSliceDice from './flashcard-help/FlashcubeSliceDice';
import SlicersBoard from './flashcard-help/SlicersBoard';
import Troubleshooting from './faq/Troubleshoot';
import DataStewardsList from './sinergi-data-stewards/DataStewardsList';
import MarketDefinitionDcv from './market-definition/MarketDefinitionDcv'



export default class LandingPage extends Component {
   
    componentDidMount(){
        console.log(window.location.pathname.indexOf('landing-page')>-1);
    }       
    
  render() {
    return (
      <div>
        <section className='breadcrumbs-section'>
          <div className='container'>
            <div className='breadcrumbs'>
              <p>
                <span>Support Landing</span> <span>Glossary</span>{' '}
                <a href='#'>Flashcard Dimensions</a>
              </p>
            </div>
          </div>
        </section>
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='page-content'>
              <BrowserRouter>
              <div hidden={window.location.pathname.indexOf('landing-page')===-1} className='col-sidebar'>
        <div className='vertical-menu'>
          <ul>
            <li id='menu-parent-1'>
              <Link to='/landing-page/overview'>Flashcard Help</Link>
              <ul>
                <li id='menu-child-1'>
                  <Link to='/landing-page/overview'>Overview</Link>
                </li>
                <li id='menu-child-2'>
                  <Link to='/landing-page/flashview'>Flashview: Key KPIs </Link>
                </li>
                <li id='menu-child-3'>
                  <Link to='/landing-page/charts'>Charts</Link>
                </li>
                <li id='menu-child-4'>
                  <Link to='/landing-page/slicers-board'>Slicers Board </Link>
                </li>
                <li id='menu-child-5'>
                  <Link to='/landing-page/dimensions-views'>Dimensions & Views</Link>
                </li>
                <li id='menu-child-6'>
                  <Link to='/landing-page/bookmark-options'>Bookmark Options</Link>
                </li>
                <li id='menu-child-7'>
                  <Link to='/landing-page/export-options'>Export Features</Link>
                </li>
                <li id='menu-child-8'>
                  <Link to='/landing-page/flashcube-slice-dice'>Flashcube: Slice & Dice Data</Link>
                </li>
              </ul>
            </li>
            <li id='menu-parent-2'>
              <Link  to='/landing-page/market-definition'>Market Definition</Link>
              <ul>
                <li id='menu-child-2-1'>
                  <Link to='/landing-page/market-definition-dcv'>Market Definition: DCV</Link>
                </li>
                <li id='menu-child-2-2'>
                  <Link to='/landing-page/market-definition-ep'>Market Definition: EP</Link>
                </li>
                <li id='menu-child-2-3'>
                  <Link to='/landing-page/market-definition-pasteur'>Market Definition: Pasteur</Link>
                </li>
                <li id='menu-child-2-4'>
                  <Link to='/landing-page/market-definition-gz'>Market Definition: Gz</Link>
                </li>
                <li id='menu-child-2-4'>
                  <Link to='/landing-page/market-definition-chc'>Market Definition: CHC</Link>
                </li>
                <li id='menu-child-2-4'>
                  <Link to='/landing-page/market-definition-dupixent'>Market Definition: Dupixent</Link>
                </li>
              </ul>
            </li>
            <li id='menu-parent-3'>
              <Link to='/landing-page/sinergi-data-stewards' >Sinergi Data Stewards</Link>
              <ul>
                <li id='menu-child-3-1'>
                  <Link  to='/landing-page/sinergi-data-stewards' >Data Stewards List</Link>
                </li>
              </ul>
            </li>
            <li id='menu-parent-4'>
              <Link to='/landing-page/sinergi-data-panel'>Sinergi Data Panel</Link>
              <ul>
                <li id='menu-child-4-1'>
                  <Link to='/landing-page/sinergi-data-panel'>Price Detail</Link>
                </li>
              </ul>
            </li>
            <li id='menu-parent-5'>
              <a to='/landing-page/flashcard-dimensions'>Glossary</a>
              <ul>
                <li id='menu-child-5-1'>
                  <Link to='/landing-page/flashcard-dimensions' >
                    Flashcard Dimensions
                  </Link>
                </li>
                <li id='menu-child-5-2'>
                  <Link to='/landing-page/flashcard-metrics'>Flashcard Metrics</Link>
                </li>
                <li id='menu-child-5-3'>
                  <Link to='/landing-page/flashcube-dimensions'>Flashcube Dimensions</Link>
                </li>
                <li id='menu-child-5-4'>
                  <Link to='/landing-page/volume-calculations'>Volume Calculations</Link>
                </li>
              </ul>
            </li>
            <li id='menu-parent-6'>
              <Link to='/landing-page/troubleshooting'>FAQ</Link>
              <ul>
                <li id='menu-child-6-1'>
                  <Link to='/landing-page/troubleshooting'>Troubleshooting</Link>
                </li>
                <li id='menu-child-6-2'>
                  <Link to='/landing-page/faqs'>Frequently Asked Questions</Link>
                </li>
                <li id='menu-child-6-3'>
                  <Link to='/landing-page/tips-and-tricks'>Tips and Tricks</Link>
                </li>
                <li id='menu-child-6-4'>
                  <Link to='/landing-page/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </li>
            <li id='menu-parent-7'>
              <Link to='/landing-page/troubleshooting' >Abbreviations</Link>
            </li>
          </ul>
        </div>
      </div>
                <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route exact path="/landing-page">
                        <Redirect to="/landing-page/overview" />
                </Route>
                {/*flashcard help*/ }
                  <Route path='/landing-page/overview' component={Overview} exact={true} />
                  <Route path='/landing-page/flashview' component={Flashview} exact={true} />
                  <Route path='/landing-page/charts' component={Charts} exact={true} />
                  <Route path='/landing-page/slicers-board' component={SlicersBoard} exact={true} />
                  <Route path='/landing-page/dimensions-views' component={DimentionsViews} exact={true} />
                  <Route path='/landing-page/bookmark-options' component={BookmarkOptions} exact={true} />
                  <Route path='/landing-page/export-options' component={ExportOptions} exact={true} />
                  <Route path='/landing-page/flashcube-slice-dice' component={FlashcubeSliceDice} exact={true} />
                  {/*Market Definition*/ }
                <Route path='/landing-page/market-definition-dcv' component={MarketDefinitionDcv} exact={true} />
                  <Route path='/landing-page/market-definition-ep' component={FlashcardDimentions} exact={true} />
                  <Route path='/market-definition-pasteur' component={FlashcardDimentions} exact={true} />
                  <Route path='/landing-page/market-definition-gz' component={FlashcardDimentions} exact={true} />
                  <Route path='/landing-page/market-definition-chc' component={FlashcardDimentions} exact={true} />
                  <Route path='/landing-page/market-definition-dupixent' component={FlashcardDimentions} exact={true} />

                {/*Sinergi Data Stewards*/ }
                <Route path='/landing-page/sinergi-data-stewards' component={DataStewardsList} exact={true} />
                {/*Senergi Data panel*/ }
                <Route path='/landing-page/sinergi-data-panel' component={FlashcardDimentions} exact={true} />
                {/*Glossary*/ }
                <Route path='/landing-page/flashcard-dimensions' component={FlashcardDimentions} exact={true} />
                <Route path='/landing-page/flashcard-metrics' component={FlashcardDimentions} exact={true} />
                <Route path='/landing-page/flashcube-dimensions' component={FlashcardDimentions} exact={true} />
                <Route path='/landing-page/volume-calculations' component={FlashcardDimentions} exact={true} />
                {/*FAQ*/ }
                <Route path='/landing-page/troubleshooting' component={Troubleshooting} exact={true} />
                <Route path='/landing-page/faqs' component={FlashcardDimentions} exact={true} />
                <Route path='/landing-page/tips-and-tricks' component={FlashcardDimentions} exact={true} />
                <Route path='/landing-page/contact-us' component={FlashcardDimentions} exact={true} />
                {/*Abbreviations*/ }
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
