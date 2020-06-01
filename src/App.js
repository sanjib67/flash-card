import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import './App.css';

class App extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Header />
           <LandingPage/>
        <Footer />
      </div>
    );
  }
}

export default App;
