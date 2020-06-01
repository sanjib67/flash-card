import React, { Component } from 'react';
import FlashcardDimentions from './glossary/FlashcardDimentions';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import classNames from "classnames";

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
import MarketDefinitionDcv from './market-definition/MarketDefinitionDcv';
import MarketDefinitionChc from './market-definition/MarketDefinitionChc';
import MarketDefinitionDup from './market-definition/MarketDefinitionDup';
import MarketDefinitionEp from './market-definition/MarketDefinitionEp';
import MarketDefinitionGz from './market-definition/MarketDefinitionGz';
import MarketDefinitionPast from './market-definition/MarketDefinitionPast';

export default class LandingPage extends Component {
  state = {
    sideBar: [
      {
        name: 'Flashcard Help',
        path: '',
        active: true,
        children: [
          {
            name: 'Overview',
            path: '/landing-page/overview',
            component: Overview,
            active: true
          },
          {
            name: 'Flashview: Key KPIs',
            path: '/landing-page/flashview',
            component: Flashview,
            active: true
          },
          {
            name: 'Charts',
            path: '/landing-page/charts',
            component: Charts,
            active: true
          },
          {
            name: 'Slicers Board',
            path: '/landing-page/slicers-board',
            component: SlicersBoard,
            active: true
          },
          {
            name: 'Dimensions & Views',
            path: '/landing-page/dimensions-views',
            component: DimentionsViews,
            active: true
          },
          {
            name: 'Bookmark Options',
            path: '/landing-page/bookmark-options',
            component: BookmarkOptions,
            active: true
          },
          {
            name: 'Export Features',
            path: '/landing-page/export-options',
            component: ExportOptions,
            active: true
          },
          {
            name: 'Flashcube: Slice & Dice Data',
            path: '/landing-page/flashcube-slice-dice',
            component: FlashcubeSliceDice,
            active: true
          }
        ]
      },
      {
        name: 'Market Definition',
        path: '',
        active: false,
        children: [
          {
            name: 'Market Definition: DCV',
            path: '/landing-page/market-definition-dcv',
            component: MarketDefinitionDcv,
            active: true
          },
          {
            name: 'Market Definition: EP',
            path: '/landing-page/market-definition-ep',
            component: MarketDefinitionEp,
            active: true
          },
          {
            name: 'Market Definition: Pasteur',
            path: '/landing-page/market-definition-pasteur',
            component: MarketDefinitionPast,
            active: true
          },
          {
            name: 'Market Definition: Gz',
            path: '/landing-page/market-definition-gz',
            component: MarketDefinitionGz,
            active: true
          },
          {
            name: 'Market Definition: CHC',
            path: '/landing-page/market-definition-chc',
            component: MarketDefinitionChc,
            active: true
          },
          {
            name: 'Market Definition: Dupixent',
            path: '/landing-page/market-definition-dupixent',
            component: MarketDefinitionDup,
            active: true
          }
        ]
      },
      {
        name: 'Sinergi Data Stewards',
        path: '',
        active: false,
        children: [
          {
            name: 'Data Stewards List',
            path: '/landing-page/sinergi-data-stewards',
            component: DataStewardsList,
            active: true
          }
        ]
      },
      {
        name: 'Sinergi Data Panel',
        path: '',
        active: false,
        children: [
          {
            name: 'Price Detail',
            path: '/landing-page/sinergi-data-panel',
            component: FlashcardDimentions,
            active: true
          }
        ]
      },
      {
        name: 'Glossary',
        path: '',
        active: false,
        children: [
          {
            name: 'Flashcard Dimensions',
            path: '/landing-page/flashcard-dimensions',
            component: FlashcardDimentions,
            active: true
          },
          {
            name: 'Flashcard Metrics',
            path: '/landing-page/flashcard-metrics',
            component: FlashcardDimentions,
            active: true
          },
          {
            name: 'Flashcube Dimensions',
            path: '/landing-page/flashcube-dimensions',
            component: FlashcardDimentions,
            active: true
          },
          {
            name: 'Volume Calculations',
            path: '/landing-page/volume-calculations',
            component: FlashcardDimentions,
            active: true
          }
        ]
      },
      {
        name: 'FAQ',
        path: '',
        active: false,
        children: [
          {
            name: 'Troubleshooting',
            path: '/landing-page/troubleshooting',
            component: Troubleshooting,
            active: true
          },
          {
            name: 'Frequently Asked Questions',
            path: '/landing-page/faqs',
            component: Overview,
            active: true
          },
          {
            name: 'Tips and Tricks',
            path: '/landing-page/tips-and-tricks',
            component: Overview,
            active: true
          },
          {
            name: 'Contact Us',
            path: '/landing-page/contact-us',
            component: Overview,
            active: true
          }
        ]
      },
      {
        name: 'Abbreviations',
        path: '',
        active: false,
        children: [
          {
            name: 'xxx',
            path: '',
            component: Overview,
            active: true
          }
        ]
      }
    ]
  };

  onParentClick = (parent,index) => {
    const sideBar = this.state.sideBar
    sideBar[index].active = !sideBar[index].active
    this.setState({sideBar:[...sideBar]})
  }

  render() {
    return (
      <div>
        <section
          hidden={window.location.pathname === '/'}
          className='breadcrumbs-section'>
          <div className='container'>
            <div className='breadcrumbs'>
              <p>
                <span>Support Landing</span> <span>Flashcard Help</span>{' '}
                <a href='#'>Overview</a>
              </p>
            </div>
          </div>
        </section>
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='page-content'>
              <BrowserRouter>
                <div
                  hidden={
                    window.location.pathname.indexOf('landing-page') === -1
                  }
                  className='col-sidebar'>
                  <div className='vertical-menu'>
                    <ul>
                      {this.state.sideBar.map((parent, index) => {
                        return (
                          <li  className={classNames({
                            active:parent.active
                          })}  >
                            <a onClick={()=>this.onParentClick(parent,index)} >
                              {parent.name}
                            </a>
                            <ul>
                              {parent.children.map((children,childIndex) => {
                                return (
                                  <li className="active">
                                    <Link to={children.path}>
                                      {children.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <Switch>
                  <Route path='/' component={Home} exact={true} />
                  <Route exact path='/landing-page'>
                    <Redirect to='/landing-page/overview' />
                  </Route>
                  {this.state.sideBar.map((parent) => {
                    return parent.children.map((children) => {
                      return (
                        <Route
                          path={children.path}
                          component={children.component}
                          exact={true}
                        />
                      );
                    });
                  })}
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
