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
          {this.state.faq.map((faq,index) => {
            return <div className='card'>
            <div className='card-header' id={'faq-'+index}>
              <h2 className='mb-0'>
                <button
                  className='btn btn-link collapsed'
                  type='button'
                  data-toggle='collapse'
                  data-target={'#answer-'+index}
                  aria-expanded='true'
                  aria-controls={'answer-'+index}>
                  {faq.Question}
                </button>
              </h2>
            </div>
            <div
              id={'answer-'+index}
              className='collapse'
              aria-labelledby={'faq-'+index}
              data-parent='#accordion-faq'>
              <div className='card-body'>
              <ul>
              {faq.Answer.split('#').map((ans,index) => {
                return <li>{ans}</li>
              }
              )}</ul>
              
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
