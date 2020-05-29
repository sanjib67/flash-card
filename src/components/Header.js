import React, { Component } from 'react'
import sanofiLogo from "../images/logo-sanofi.png"
import flashCardLogo from "../images/logo.png"
export default class Header extends Component {
    render() {
        return (
            <div id="page-top">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand mr-auto" href="/"><img src={flashCardLogo} /></a>
                    <a className="second-brand" href="/"><img src={sanofiLogo}  /></a>
                    <div className="nav-iteml-wrap ml-auto" id="navbarResponsive">
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
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="container">
                    <form className="search-form" name="sentMessage">
                        <div className="search-w">
                            <div className="form-group mb-0">
                                <button className="btn btn-empty btn-searh" type="submit"><i className="zmdi zmdi-search"></i></button>
                                <input className="form-control search-input" name="search" type="search" placeholder="Looking for something specific? Search here…" />
                            </div>
                        </div>
                    </form>
                </div>
            </header>
    </div>
        )
    }
}
