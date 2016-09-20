import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>AboutPage</h2>
        <Link to="/">home page</Link>
      </div>
    );
  }
}

AboutPage.propTypes = {
};
