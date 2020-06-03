import React, { Component } from 'react';
import ts from '../../data/troubleshoot.json'

export default class Troubleshoot extends Component {
  state = {
    ts:ts
  }
  render() {
    return (
      <div className='content'>
        <h1>Troubleshooting</h1>
        <div className='accordion' id='accordion-faq'>
          {this.state.ts.map((ts) => {
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
                  {ts.Question}
                </button>
              </h2>
            </div>
            <div
              id='answer-1'
              className='collapse'
              aria-labelledby='faq-1'
              data-parent='#accordion-faq'>
              <div className='card-body'>
              {ts.Answer}
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
