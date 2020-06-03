import React, { Component } from 'react';
import faq from './../../data/faq.json'

export default class Faqs extends Component {
  state = {
    faq:faq
  }
  render() {
    return (
      <div className='content'>
        <h1>F A Q</h1>
        <div className='accordion' id='accordion-faq'>
          {this.state.faq.map((faq) => {
            return <div className='card'>
            <div className='card-header' id='faq-1'>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link collapsed'
                  type='button'
                  data-toggle='collapse'
                  data-target='#answer-1'
                  aria-expanded='true'
                  aria-controls='answer-1'>
                  {faq.Question}
                </button>
              </h2>
            </div>
            <div
              id='answer-1'
              className='collapse'
              aria-labelledby='faq-1'
              data-parent='#accordion-faq'>
              <div className='card-body'>
              {faq.Answer}
              </div>
            </div>
          </div>
          }
          )}
        </div>
      </div>
    );
  }
}
