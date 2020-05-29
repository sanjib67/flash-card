import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';

export default class Troubleshoot extends Component {
  componentDidMount() {
    $('#menu-parent-6, #menu-child-6-1').addClass('active');
  }
  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Troubleshooting</h1>
          <div className='accordion' id='accordion-faq'>
            <div className='card'>
              <div className='card-header' id='faq-1'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-1'
                    aria-expanded='true'
                    aria-controls='answer-1'>
                    How will I get access to the Flashcard?
                  </button>
                </h2>
              </div>
              <div
                id='answer-1'
                className='collapse'
                aria-labelledby='faq-1'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-2'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-2'
                    aria-expanded='true'
                    aria-controls='answer-2'>
                    When I open the Flashcard I see “Data access error, please
                    try again or contact support team” message.
                  </button>
                </h2>
              </div>
              <div
                id='answer-2'
                className='collapse'
                aria-labelledby='faq-2'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-3'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-3'
                    aria-expanded='true'
                    aria-controls='answer-3'>
                    When I open the Flashcard I get a popup window asking for my
                    credential.
                  </button>
                </h2>
              </div>
              <div
                id='answer-3'
                className='collapse'
                aria-labelledby='faq-3'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-4'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-4'
                    aria-expanded='true'
                    aria-controls='answer-4'>
                    I am not able to see all the countries or market in the
                    Flashcard.
                  </button>
                </h2>
              </div>
              <div
                id='answer-4'
                className='collapse'
                aria-labelledby='faq-4'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-5'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-5'
                    aria-expanded='true'
                    aria-controls='answer-5'>
                    I can see the Flashcard icon and able to open the dashboard,
                    but still cannot access the latest data that has been
                    uploaded or shared with Sinergi team.
                  </button>
                </h2>
              </div>
              <div
                id='answer-5'
                className='collapse'
                aria-labelledby='faq-5'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-6'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-6'
                    aria-expanded='true'
                    aria-controls='answer-6'>
                    How do I navigate to the reports in the Flashcard?
                  </button>
                </h2>
              </div>
              <div
                id='answer-6'
                className='collapse'
                aria-labelledby='faq-6'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-7'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-7'
                    aria-expanded='true'
                    aria-controls='answer-7'>
                    How can I access the reports in detail?
                  </button>
                </h2>
              </div>
              <div
                id='answer-7'
                className='collapse'
                aria-labelledby='faq-7'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-8'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-8'
                    aria-expanded='true'
                    aria-controls='answer-8'>
                    If I am not connected to the SANOFI network and I want to
                    see the reports how can I access it?
                  </button>
                </h2>
              </div>
              <div
                id='answer-8'
                className='collapse'
                aria-labelledby='faq-8'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-9'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-9'
                    aria-expanded='true'
                    aria-controls='answer-9'>
                    I am using Mac, can I access the Flashcard?
                  </button>
                </h2>
              </div>
              <div
                id='answer-9'
                className='collapse'
                aria-labelledby='faq-9'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-10'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-10'
                    aria-expanded='true'
                    aria-controls='answer-10'>
                    Export to PowerPoint/ Excel/ Outlook is not working or I am
                    not able to export to Powerpoint/ Excel/ Outlook.
                  </button>
                </h2>
              </div>
              <div
                id='answer-10'
                className='collapse'
                aria-labelledby='faq-10'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-11'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-11'
                    aria-expanded='true'
                    aria-controls='answer-11'>
                    Whenever I am accessing the Flashcard I am getting an error
                    message which says ‘Run-Time Error’.
                  </button>
                </h2>
              </div>
              <div
                id='answer-11'
                className='collapse'
                aria-labelledby='faq-11'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-12'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-12'
                    aria-expanded='true'
                    aria-controls='answer-12'>
                    I need a Flashcard training.
                  </button>
                </h2>
              </div>
              <div
                id='answer-12'
                className='collapse'
                aria-labelledby='faq-12'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-13'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-13'
                    aria-expanded='true'
                    aria-controls='answer-13'>
                    I have requested for Flashcard access. How can I access the
                    Flashcard?
                  </button>
                </h2>
              </div>
              <div
                id='answer-13'
                className='collapse'
                aria-labelledby='faq-13'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header' id='faq-14'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#answer-14'
                    aria-expanded='true'
                    aria-controls='answer-14'>
                    I have changed my laptop recently. How can I re-install the
                    Flashcard?
                  </button>
                </h2>
              </div>
              <div
                id='answer-14'
                className='collapse'
                aria-labelledby='faq-14'
                data-parent='#accordion-faq'>
                <div className='card-body'>
                  Request through ServiceNow. Once the manager approves it will
                  automatically get installed on to your system. Then by
                  clicking on the shortcut key for Flashcard present on the
                  desktop or going to start menu click on Programs and then
                  click on the Flashcard icon
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content-footer trbls-style'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Flashview: Key KPIs</span>{' '}
              <a
                href='page-charts.php'
                className='btn btn-outline-primary btn-arrow'>
                Next
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
