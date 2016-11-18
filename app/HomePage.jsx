import React from 'react';
import { Link } from 'react-router'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Please wait for the SOCALLED waiting period.....</h1>
        {/* <Link to="/about" >about page</Link> */}
        {this.props.children}
      </div>
    );
  }
}
