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
                    <Link className="navbar-brand mr-auto" to="/"><img alt="" src={flashCardLogo} /></Link>
                  {/*<Link className="second-brand" to="/"><img alt="" src={sanofiLogo}  /></Link>*/}  
                    <Link className="nav-iteml-wrap ml-auto " to="/"><img alt="" src={sanofiLogo}  /></Link>
                  {/*  <div className="nav-iteml-wrap ml-auto" id="navbarResponsive">
                       
                    <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item"><a className="nav-link notifications" href="#"><i className="zmdi zmdi-notifications-none"></i><span className="count-bubble">1</span></a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>   
                    </div>*/}
                </div>
            </nav>
            
            <header className="masthead">  

            <div>
             <img alt='' src={headerBackground} />    
             </div>          
               {/*<div className="container">
                    <form className="search-form" name="sentMessage">
                        <div className="search-w">
                            <div className="form-group mb-0">
                                <button className="btn btn-empty btn-searh" type="submit"><i className="zmdi zmdi-search"></i></button>
                                <input className="form-control search-input" name="search" type="search" placeholder="Looking for something specific? Search here…" /> 
                            </div> 
                         </div>
                    </form>
                </div> */}
            </header>
    </div>
        )
    }
}
