require('./minionBlock.less');

import React, {PropTypes} from 'react';

export default class MinionBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="minion-block">
        <img className="dave" src="/images/minion.jpg" />
        <div className="minion-box">
          <span className="trails">the </span>
          <span className="logo">SO CALLED</span>
          <span className="trails"> place</span>
        </div>
        <div className="welcome-box">
          <span>Features.....</span>
        </div>
      </div>
    );
  }
}

MinionBlock.propTypes = {
};
