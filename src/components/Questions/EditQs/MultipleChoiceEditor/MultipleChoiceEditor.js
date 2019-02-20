import React, { Component } from 'react';
import OptionField from '../../OptionField';

class MultipleChoiceEditor extends Component {
  constructor(props) {
    super(props);
    this.input = {};
  }

  update() {
    this.props.updateQuestion(this.props._id, {
      title: this.title.value
    });
  }
  render() {
    const { _id, title, options } = this.props;
    return (
      <div>
        <form>
          <div>
            <label>Field Label</label>
            <input type='text' value={title} onChange={() => this.update()} />
          </div>
          <div>
            <label>Options</label>
            {options.map((option, index) => {
              return (
                <OptionField
                  key={option._id}
                  content={option.content}
                  ref={input => {
                    this.inputs[options._id] = input;
                  }}
                  // may neew to change the.props. this.props.updateQuestion below
                  onChange={e => {
                    this.props.updateQuestion(_id, {
                      options: [
                        ...options.slice(0, index),
                        {
                          _id: option._id,
                          content: e.target.value
                        },
                        ...options.slice(index + 1)
                      ]
                    });
                  }}
                />
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
export default MultipleChoiceEditor;
