import React, { Component } from 'react';
import HelpfulButtons from '../HelpfulButtons';
import $ from 'jquery';
import graphBookmarks2 from '../../images/graph-bookmark-2.png';

export default class BookmarkOptions extends Component {
  componentDidMount() {
    $('#menu-parent-1, #menu-child-6').addClass('active');
  }
  render() {
    return (
      <div className='col-main-content'>
        <div className='content'>
          <h1>Bookmark Options</h1>
          <img alt="" src={graphBookmarks2} />
          <ol>
            <li>
              <strong>Save current analysis</strong> - User will be able to save
              the current analysis.
            </li>
            <li>
              <strong>Save current analysis by default</strong> - Current view
              can be configured as default by clicking here.
            </li>
            <li>
              <strong>Reset default analysis</strong> - Default analysis can be
              reset clicking by this option.
            </li>
          </ol>
        </div>
        <div className='content-footer'>
          <div className='mr-auto'>
            <HelpfulButtons />
          </div>
          <div className='next-page'>
            <p>
              <span className='next-page-title'>Export Features</span>{' '}
              <a
                href='page-export.php'
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
