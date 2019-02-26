import React, { Component } from 'react';

export default class TextEditor extends Component {
  // update() {
  //   var value = {
  //     title: this.title.value,
  //     placeholder: this.placeholder.value
  //   };
  //   this.props.updateQuestion(this.props._id, value);
  // }
  render() {
    console.log('text editor', this.props);
    const {
      options,
      questionTitle,
      updateQuestion,
      updateQuestionTitle
    } = this.props;
    return (
      <div>
        <form>
          <h4>{questionTitle}</h4>
          <label>Edit Question Title</label>
          <input
            type='text'
            value={options.content}
            // placeholder={options.content}
            // ref={node => {
            //   this.title = node;
            // }}
            // onChange={() => this.update()}
          />
        </form>
      </div>
    );
  }
}
// import React from 'react';

// export default function TextEditor(props) {
//   const wut = !props ? '' : console.log(props);
//   return (
//     <div>
//       <h3>Text Editor</h3>
//       {wut}
//     </div>
//   );
// }
