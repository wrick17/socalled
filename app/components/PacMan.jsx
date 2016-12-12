require("./pacMan.less");

import React, {PropTypes} from 'react';

export default class PacMan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bullets = [];
    for (var i = 0; i < 20; i++) {
      bullets.push(<span className="bullet" key={i}></span>);
    }
    return (
      <div className="pac-wrapper">
        <label className="pac-label">
          <span className="pacman-title">PACman</span>
          <span className="pacman-description">the hungry</span>
        </label>
        <div className="pacman">
          {bullets}
          <img className="pac" src="/images/pacman2.png" />
        </div>
      </div>
    );
  }
}

PacMan.propTypes = {
};
