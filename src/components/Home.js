import React, { Component } from 'react';
import landingSlide from '../images/landing-side.png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <section className='page-section pt-63' id='services'>
        <div className='container'>
          <div className='page-content'>
            <div className='col-main-content-full'>
              <div className='content custom-cols'>
                <div className='col-left'>
                  {this.props.sideBar.map((parent) => {
                    return (
                      <div className='col'>
                        <h2>{parent.name}</h2>
                        <ul className='list-clean'>
                          {parent.children.map((eachChild) => {
                            return (
                              <li>
                                <Link to={eachChild.path}>
                                  {eachChild.name}
                                </Link>
                              </li>
                            );
                          })}

                          <li>
                            <Link
                              to='/help/landing-page/overview'
                              className='highlight'>
                              See More
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className='col-right'>
                  <img alt='' src={landingSlide} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
