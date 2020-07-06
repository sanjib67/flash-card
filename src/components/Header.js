import React, { Component } from 'react'
import sanofiLogo from "../images/logo-sanofi.png"
import flashCardLogo from "../images/logo.png";
import classNames from "classnames";
import { Link } from 'react-router-dom';
import headerBackground from "../images/bg-header.png";
export default class Header extends Component {

    state = {
        pageYOffset:null
    }

componentDidMount(){
    this.setState({pageYOffset:window.pageYOffset})
    window.addEventListener("scroll",()=>{
        this.setState({pageYOffset:window.pageYOffset})
    }  );
}
    render() {
        return (
            <div id="page-top">
            <nav  className={classNames({
                "navbar": true,
                "navbar-expand-lg": true,
                "navbar-dark": true,
                "fixed-top": true,
                "navbar-shrink":this.state.pageYOffset>110,
              })} style={this.state.pageYOffset>110?{
                background       : '#000000bf',
                transition : 'background .25s ease-in-out'
            }:{
                background       : 'transparent',
                transition : 'background .25s ease-in-out'
            }} id="mainNav">
                <div className="container">
                    <Link className="navbar-brand mr-auto" to="/help"><img alt="" src={flashCardLogo} /></Link>
                    <Link className="nav-iteml-wrap ml-auto " to="/help"><img alt="" src={sanofiLogo}  /></Link>
                </div>
            </nav>
            
            <header className="masthead">              
             <img alt='' src={headerBackground} />                      
            </header>
    </div>
        )
    }
}
