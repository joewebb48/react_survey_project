import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Dropdown</h3>
        </div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    );
  }
}
