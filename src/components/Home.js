import React, { Component } from 'react'
import landingSlide from '../images/landing-side.png'

export default class Home extends Component {
    render() {
        return (
            <section className='page-section pt-63' id='services'>
            <div className='container'>
              <div className='page-content'>
                <div className='col-main-content-full'>
                  <div className='content custom-cols'>
                    <div className='col-left'>
                      <div className='col'>
                        <h2>Flashcard Help</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='page-overview.php'>Overview</a>
                          </li>
                          <li>
                            <a href='page-flashview.php'>Flashview: Key KPIs </a>
                          </li>
                          <li>
                            <a href='page-charts.php'>Charts</a>
                          </li>
                          <li>
                            <a href='page-slice-board.php'>Slicers Board </a>
                          </li>
                          <li>
                            <a href='page-dimensions.php'>Dimensions & Views</a>
                          </li>
                          <li>
                            <a href='page-bookmark.php'>Bookmark Options</a>
                          </li>
                          <li>
                            <a href='page-export.php'>Export Features</a>
                          </li>
                          <li>
                            <a href='page-slice-dice.php'>
                              Flashcube: Slice & Dice Data
                            </a>
                          </li>
                          <li>
                            <a href='/landing-page' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col'>
                        <h2>Market Definition</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='#'>Market Definition: DCV</a>
                          </li>
                          <li>
                            <a href='#'>Market Definition: EP</a>
                          </li>
                          <li>
                            <a href='#'>Market Definition: Pasteur</a>
                          </li>
                          <li>
                            <a href='#'>Market Definition: Gz</a>
                          </li>
                          <li>
                            <a href='#' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col'>
                        <h2>Sinergi Data Stewards</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='page-data-stewards.php'>
                              Data Stewards List
                            </a>
                          </li>
                          <li>
                            <a href='#' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col'>
                        <h2>Sinergi Data Panel</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='#'>Price Detail</a>
                          </li>
                          <li>
                            <a href='#' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col'>
                        <h2>Glossary</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='page-flashcard-dimensions.php'>
                              Flashcard Dimensions
                            </a>
                          </li>
                          <li>
                            <a href='#'>Flashcard Metrics</a>
                          </li>
                          <li>
                            <a href='#'>Flashcube Dimensions</a>
                          </li>
                          <li>
                            <a href='#'>Volume Calculations</a>
                          </li>
                          <li>
                            <a href='#' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col'>
                        <h2>FAQ</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='page-troubleshooting.php'>Troubleshooting</a>
                          </li>
                          <li>
                            <a href='#'>Frequently Asked Questions</a>
                          </li>
                          <li>
                            <a href='#'>Tips and Tricks</a>
                          </li>
                          <li>
                            <a href='#'>Contact Us</a>
                          </li>
                          <li>
                            <a href='#' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col'>
                        <h2>Abbreviations</h2>
                        <ul className='list-clean'>
                          <li>
                            <a href='#' className='highlight'>
                              See More
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-right'>
                      <img src={landingSlide} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
