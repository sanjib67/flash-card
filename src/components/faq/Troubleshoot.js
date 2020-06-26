import React, { Component } from 'react';
import ts from '../../data/troubleshoot.json';

export default class Troubleshoot extends Component {
  state = {
    ts: ts
  };
  render() {
    return (
      <div className='content'>
        <h1>Troubleshooting</h1>
        <div className='accordion' id='accordion-faq'>
          {this.state.ts.map((ts, index) => {
            return (
              <div className='card'>
                <div className='card-header' id={'faq-' + index}>
                  <h2 className='mb-0'>
                    <button
                      className='btn btn-link collapsed '
                      type='button'
                      data-toggle='collapse'
                      data-target={'#answer-' + index}
                      aria-expanded='true'
                      aria-controls={'answer-' + index}>
                      {ts.Question}
                    </button>
                  </h2>
                </div>
                <div
                  id={'answer-' + index}
                  className='collapse'
                  aria-labelledby={'faq-' + index}
                  data-parent='#accordion-faq'>
                  <div className='card-body'>
                    <ul>
                      {ts.Answer.split('#').map((ans, index) => {
                        return (
                          <li key={"li"+index}>
                            <div
                            key={"divli"+index}
                              dangerouslySetInnerHTML={{
                                __html: ans.replace(
                                  'flashcard@sanofi.com',
                                  '<a href="mailto:flashcard@sanofi.com">flashcard@sanofi.com</a>'
                                )
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
