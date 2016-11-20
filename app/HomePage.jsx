import React from 'react';
import { Link } from 'react-router'
import MinionBlock from './components/MinionBlock.jsx'
import PacMan from './components/PacMan.jsx'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MinionBlock />
        <PacMan />
        {this.props.children}
      </div>
    );
  }
}
