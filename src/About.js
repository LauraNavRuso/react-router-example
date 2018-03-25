import React from 'react';

class About extends React.Component {
  render() {
    return (
      <p>El objetivo de esta web es { this.props.objective }</p>
    );
  }
}

export default About;
