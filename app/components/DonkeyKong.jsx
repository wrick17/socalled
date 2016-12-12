require("./donkeyKong.less");

import React, {PropTypes} from 'react';

export default class DonkeyKong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const barrels = [];
    for (var i = 0; i < 20; i++) {
      barrels.push(<img className="barrel" key={i} src="/images/dbarrel.png" />);
    }
    return (
      <div className="kong-wrapper">
        <label className="kong-label">
          <span className="kong-title">Donkey Kong</span>
          <span className="kong-description">the destroyer</span>
        </label>
        <div className="kong">
          <img className="kong-img" src="/images/donkeyKong.jpg" />
          {barrels}
        </div>
        <div className="ramp"></div>
      </div>
    );
  }
}

DonkeyKong.propTypes = {
};
