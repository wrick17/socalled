import React from 'react';
import { Link } from 'react-router'
import MinionBlock from './components/MinionBlock.jsx'
import PacMan from './components/PacMan.jsx'
import DonkeyKong from './components/DonkeyKong.jsx'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MinionBlock />
        <PacMan />
        <DonkeyKong />
        <div className="more">
          And many more to come . . . . . soon
        </div>
        {this.props.children}
      </div>
    );
  }
}
