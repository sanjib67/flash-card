import React, { Component } from 'react';
import graphBookmarks2 from '../../images/graph-bookmark-2.png';

export default class BookmarkOptions extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Bookmark Options</h1>
        <img alt='' src={graphBookmarks2} />
        <ol>
          <li>
            <strong>Save current analysis</strong> - User will be able to save
            the current analysis.
          </li>
          <li>
            <strong>Save current analysis by default</strong> - Current view can
            be configured as default by clicking here.
          </li>
          <li>
            <strong>Reset default analysis</strong> - Default analysis can be
            reset clicking by this option.
          </li>
        </ol>
      </div>
    );
  }
}
