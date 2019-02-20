import React, { Component } from 'react';

export default class MultiLineText extends Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
      <div>
        <h3 className=''>MultiLine Text</h3>
        <div className='f'>
          <textarea
            type='textarea'
            className='f'
            placeholder={`placeholder`}
            name={`id`}
          />
        </div>
      </div>
    );
  }
}
