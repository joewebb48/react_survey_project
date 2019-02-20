import React, { Component } from 'react';

export default class TextEditor extends Component {
  update() {
    var value = {
      title: this.title.value,
      placeholder: this.placeholder.value
    };
    this.props.updateQuestion(this.props._id, value);
  }
  render() {
    const { title, placeholder } = this.props;
    return (
      <div>
        <form>
          Mdiv>
          <label>Field Label</label>
          <input
            type='text'
            value={title}
            ref={node => {
              this.title = node;
            }}
            onChange={() => this.update()}
          />
        </form>
      </div>
    );
  }
}
