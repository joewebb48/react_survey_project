import React, { Component, PropTypes } from 'react';

export default class SingleLineText extends Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
      <div>
        <h3 className=''>Single Line Text</h3>
        <div className='f'>
          <input
            type='text'
            className='f'
            placeholder={`placeholder`}
            name={`id`}
          />
        </div>
      </div>
    );
  }
}
