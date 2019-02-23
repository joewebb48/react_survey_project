import React, { Component } from 'react';

export default class EditSurveyPage extends Component {
  // updateTitle() {
  //   this.props.updateSurveyTitle({
  //     title: this.title.value
  //   });
  // }
  // updateSurveyTitle(value) {
  //   this.props.updateSurveySubTitle({
  //     subTitle: value
  //   });
  // }
  render() {
    let {
      s_title: title,
      s_subtitle: subTitle,
      updateSurveyTitle,
      updateSurveySubTitle,
      saveChangesKeyPress
    } = this.props;
    return (
      <div>
        <h1>Edit Survey</h1>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={title}
            ref={input => {
              this.title = input;
            }}
            onChange={e => updateSurveyTitle(e.target.value)}
            onKeyPress={e => saveChangesKeyPress(e)}
          />
        </div>
        <div>
          <label>SubTitle</label>
          <textarea
            value={subTitle}
            ref={input => {
              this.subTitle = input;
            }}
            onChange={e => updateSurveySubTitle(e.target.value)}
            onKeyPress={e => saveChangesKeyPress(e)}
          />
        </div>
      </div>
    );
  }
}
