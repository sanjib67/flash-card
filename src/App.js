import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import FlashcardDimentions from './components/glossary/FlashcardDimentions';
import Home from './components/Home';
import Overview from './components/flashcard-help/Overview';
import Flashview from './components/flashcard-help/Flashview';
import Charts from './components/flashcard-help/Charts';
import BookmarkOptions from './components/flashcard-help/BookmarkOptions';
import DimentionsViews from './components/flashcard-help/DimentionsViews';
import ExportOptions from './components/flashcard-help/ExportOptions';
import FlashcubeSliceDice from './components/flashcard-help/FlashcubeSliceDice';
import SlicersBoard from './components/flashcard-help/SlicersBoard';
import Troubleshooting from './components/faq/Troubleshoot';
import DataStewardsList from './components/sinergi-data-stewards/DataStewardsList';
import MarketDefinitionDcv from './components/market-definition/MarketDefinitionDcv';
import MarketDefinitionChc from './components/market-definition/MarketDefinitionChc';
import MarketDefinitionDup from './components/market-definition/MarketDefinitionDup';
import MarketDefinitionEp from './components/market-definition/MarketDefinitionEp';
import MarketDefinitionGz from './components/market-definition/MarketDefinitionGz';
import MarketDefinitionPast from './components/market-definition/MarketDefinitionPast';

class App extends React.Component {

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

  render() {
    return (
      <div>
      <BrowserRouter>
      <Header />
      <Route exact path='/' render={()=> <Home sideBar={this.state.sideBar}/>} />
      <Route path='/landing-page' render={()=> <LandingPage sideBar={this.state.sideBar}/>} />
      <Footer />
      </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
