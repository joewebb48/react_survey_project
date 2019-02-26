import React, { Component } from 'react';
import axios from 'axios';
import MultiChoiceOptionField from '../../MultiChoiceOptionField';
// import CheckBoxOptionField from '../../CheckBoxOptionField';

class MultipleChoiceEditor extends Component {
  constructor(props) {
    super(props);
    this.input = {};
    this.state = {
      options: [],
      optionTitle: '',
      questionTitle: ''
    };
  }
  render() {
    const {
      options,
      questionTitle,
      updateQuestion,
      updateQuestionTitle
    } = this.props;
    return (
      <div>
        <form>
          <h3>{questionTitle}</h3>
          <div>
            <label>Edit Question Title</label>
            {/* {wut} */}
            <input
              type='text'
              placceholder={'Edit Question Title'}
              value={''}
              onChange={() => this.update()}
            />
          </div>
          <div>
            <label>Edit Options</label>
            <button>Add New Option</button>
            {options.map((option, i) => {
              return (
                <div>
                  <input type='text' value={option.content} />
                  <div />
                  <button>Delete</button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
export default MultipleChoiceEditor;
