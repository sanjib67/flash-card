import React, { Component } from 'react';
import FlashcardDimentions from './glossary/FlashcardDimentions';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import classNames from 'classnames';
import HelpfulButtons from './HelpfulButtons';

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
            active: false
          },
          {
            name: 'Charts',
            path: '/landing-page/charts',
            component: Charts,
            active: false
          },
          {
            name: 'Slicers Board',
            path: '/landing-page/slicers-board',
            component: SlicersBoard,
            active: false
          },
          {
            name: 'Dimensions & Views',
            path: '/landing-page/dimensions-views',
            component: DimentionsViews,
            active: false
          },
          {
            name: 'Bookmark Options',
            path: '/landing-page/bookmark-options',
            component: BookmarkOptions,
            active: false
          },
          {
            name: 'Export Features',
            path: '/landing-page/export-options',
            component: ExportOptions,
            active: false
          },
          {
            name: 'Flashcube: Slice & Dice Data',
            path: '/landing-page/flashcube-slice-dice',
            component: FlashcubeSliceDice,
            active: false
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
            active: false
          },
          {
            name: 'Market Definition: EP',
            path: '/landing-page/market-definition-ep',
            component: MarketDefinitionEp,
            active: false
          },
          {
            name: 'Market Definition: Pasteur',
            path: '/landing-page/market-definition-pasteur',
            component: MarketDefinitionPast,
            active: false
          },
          {
            name: 'Market Definition: Gz',
            path: '/landing-page/market-definition-gz',
            component: MarketDefinitionGz,
            active: false
          },
          {
            name: 'Market Definition: CHC',
            path: '/landing-page/market-definition-chc',
            component: MarketDefinitionChc,
            active: false
          },
          {
            name: 'Market Definition: Dupixent',
            path: '/landing-page/market-definition-dupixent',
            component: MarketDefinitionDup,
            active: false
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
            active: false
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
            active: false
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
            active: false
          },
          {
            name: 'Flashcard Metrics',
            path: '/landing-page/flashcard-metrics',
            component: FlashcardDimentions,
            active: false
          },
          {
            name: 'Flashcube Dimensions',
            path: '/landing-page/flashcube-dimensions',
            component: FlashcardDimentions,
            active: false
          },
          {
            name: 'Volume Calculations',
            path: '/landing-page/volume-calculations',
            component: FlashcardDimentions,
            active: false
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
            active: false
          },
          {
            name: 'Frequently Asked Questions',
            path: '/landing-page/faqs',
            component: Overview,
            active: false
          },
          {
            name: 'Tips and Tricks',
            path: '/landing-page/tips-and-tricks',
            component: Overview,
            active: false
          },
          {
            name: 'Contact Us',
            path: '/landing-page/contact-us',
            component: Overview,
            active: false
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
            path: '/landing-page/xxx',
            component: Overview,
            active: false
          }
        ]
      }
    ]
  };

  componentWillMount = () => {};

  breadCrumbs = () => {
    let allChildren = this.state.sideBar
      .map((parent, parentIndex) => {
        return parent.children.map((child, childIndex) => {
          return {
            path: child.path,
            name: child.name,
            parent,
            parentIndex,
            childIndex
          };
        });
      })
      .flat();

    const data = allChildren.find((eachChild) => {
      return eachChild.path === window.location.pathname;
    });
    return data;
  };

  next = (present) => {
    let allChildren = this.state.sideBar
      .map((parent, parentIndex) => {
        return parent.children.map((child, childIndex) => {
          return {
            path: child.path,
            name: child.name,
            parent,
            parentIndex,
            childIndex
          };
        });
      })
      .flat();

    const presentIndex = allChildren.findIndex((eachChild) => {
      return eachChild.name === present;
    });
    const nextIndex =
      allChildren.length === presentIndex + 1 ? 0 : presentIndex + 1;
    const nextPath = allChildren[nextIndex].path;
    const nextName = allChildren[nextIndex].name;
    const parentIndex = allChildren[nextIndex].parentIndex;
    const childIndex = allChildren[nextIndex].childIndex;

    return {
      nextIndex,
      nextPath,
      nextName,
      parentIndex,
      childIndex
    };
  };

  onParentClick = (parent, index) => {
    const sideBar = this.state.sideBar;
    sideBar[index].active = !sideBar[index].active;
    this.setState({ sideBar: [...sideBar] });
  };

  onChildClick(index, childIndex) {
    const sideBar = this.state.sideBar;
    sideBar.forEach((eachParent) => {
      eachParent.children.forEach((eachChild) => {
        eachChild.active = false;
      });
    });
    sideBar[index].children[childIndex].active = true;
    this.setState({ sideBar: [...sideBar] });
  }

  componentDidMount() {
    console.log();
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
                <span>Support Landing</span>{' '}
                <span>{this.breadCrumbs().parent.name}</span>{' '}
                <a>{this.breadCrumbs().name}</a>
              </p>
            </div>
          </div>
        </section>
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='page-content'>
              <div
                hidden={window.location.pathname.indexOf('landing-page') === -1}
                className='col-sidebar'>
                <div className='vertical-menu'>
                  <ul>
                    {this.state.sideBar.map((parent, index) => {
                      return (
                        <li
                          key={parent.name}
                          className={classNames({
                            active: parent.active
                          })}>
                          <a onClick={() => this.onParentClick(parent, index)}>
                            {parent.name}
                          </a>
                          <ul>
                            {parent.children.map((children, childIndex) => {
                              return (
                                <li
                                  key={children.name}
                                  onClick={() =>
                                    this.onChildClick(index, childIndex)
                                  }
                                  className={classNames({
                                    active: children.active
                                  })}>
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
                        render={() => {
                          return (
                            <div className='col-main-content'>
                              <children.component />
                              <div className='content-footer'>
                                <div className='mr-auto'>
                                  <HelpfulButtons />
                                </div>
                                <div className='next-page'>
                                  <p>
                                    <span className='next-page-title'>
                                      {this.next(children.name).nextName}
                                    </span>{' '}
                                    <Link
                                      to={this.next(children.name).nextPath}
                                      onClick={() => {
                                        this.onChildClick(
                                          this.next(children.name).parentIndex,
                                          this.next(children.name).childIndex
                                        );
                                      }}
                                      className='btn btn-outline-primary btn-arrow'>
                                      Next
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                        exact={true}
                      />
                    );
                  });
                })}
              </Switch>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
