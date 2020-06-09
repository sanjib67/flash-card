import React, { Component } from 'react';
import tip1 from '../../images/tip1.png';
import tip2 from '../../images/tip2.png';
import tip3 from '../../images/tip3.png';
import tip4 from '../../images/tip4.png';
import tip5 from '../../images/tip5.png';

export default class TipsAndTricks extends Component {
  render() {
    return (
      <div className='content'>
        <h1>Tips And Tricks</h1>
        <ul>
          <li>
            <h2>Tip 1</h2>
            <img alt='' src={tip1} />
          </li>
          <div className='dropdown-divider'></div>
          <li>
            <h2>Tip 2</h2>
            <img alt='' src={tip2} />
          </li>
          <div className='dropdown-divider'></div>
          <li>
            <h2>Tip3</h2>

            <img alt='' src={tip3} />
          </li>
          <div className='dropdown-divider'></div>
          <li>
            <h2>Tip 4</h2>

            <img alt='' src={tip4} />
          </li>
          <div className='dropdown-divider'></div>
          <li>
            <h2>Tip 5</h2>

            <img alt='' src={tip5} />
          </li>
        </ul>
      </div>
    );
  }
}
