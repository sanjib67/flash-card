import React, { Component } from 'react'
import solutionecLogo from "../images/logo-black.png"
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="bg-primary">
                <div className="container">
                    <div className="cta-box">
                        <div className="mr-auto text-lg-left"><p className="cta-text">Didn’t find what you were looking for? Have no worries, we’re here to help you out!</p></div>
                        <div className="ml-auto">
                            <a href="" className="btn btn-outline-white">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray">
            <div className="container">
                <div className="powered-box text-center">
                    <img src={solutionecLogo} />
                    <p>Powered by Flashcard v1.0. Last updated 06/02/2019.</p>
                </div>
            </div>
        </div>
        </footer>
        )
    }
}


         
      
       