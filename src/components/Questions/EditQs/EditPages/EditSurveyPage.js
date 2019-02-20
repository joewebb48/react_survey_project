import React, { Component } from 'react';

export default class EditSurveyPage extends Component {
  updateTitle() {
    this.props.updateSurveyTitle({
      title: this.title.value
    });
  }
  updateSurveyTitle() {
    this.props.updateSurveySubTitle({
      subTitle: this.subTitle.value
    });
  }
  render() {
    let {
      s_title: title,
      s_subtitle: subTitle,
      updateSurveyTitle,
      updateSurveySubTitle
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
            onChange={updateSurveyTitle}
          />
        </div>
        <div>
          <label>SubTitle</label>
          <textarea
            value={subTitle}
            ref={input => {
              this.subTitle = input;
            }}
            onChange={updateSurveySubTitle}
          />
        </div>
      </div>
    );
  }
}
