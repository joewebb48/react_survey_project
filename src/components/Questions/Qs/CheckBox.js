import React, { Component, PropTypes } from 'react';
import OptionField from '../OptionField';

export default class Checkbox extends Component {
  render() {
    const { title, options } = this.props;
    return (
      <div>
        <div>
          <h3>Check Box</h3>
        </div>
        <OptionField />
        <OptionField />
        <OptionField />
      </div>
    );
  }
}
