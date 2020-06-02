import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Header />
      <LandingPage />
      <Footer />
      </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
