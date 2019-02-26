import React, { Component } from 'react';
import axios from 'axios';
import AddQuestionPage from '../Questions/EditQs/EditPages/AddQuestionPage';
import EditQuestionPage from '../Questions/EditQs/EditPages/EditQuestionPage';
import EditSurveyPage from '../Questions/EditQs/EditPages/EditSurveyPage';

export default class EditContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 2,
      selectedQ: null
    };
  }
  updateTab(tabType) {
    this.setState({
      selectedTab: tabType
    });
  }
  render() {
    const {
      s_title,
      s_subtitle,
      q_title,
      q_type,
      addToQuestions,
      questions,
      selectedQuestionObject,
      updateQuestion,
      updateQuestionTitle,
      updateSurveySubTitle,
      saveChangesKeyPress,
      updateSurveyTitle,
      saveChanges
    } = this.props;
    return (
      <div>
        <h2>Edit Survey Page</h2>

        <div>
          <button onClick={() => this.updateTab(1)}>Add Question</button>
          {this.state.selectedTab === 1 ? (
            <div>
              <AddQuestionPage addToQuestions={addToQuestions} />
            </div>
          ) : (
            ''
          )}
        </div>
        <br />
        <div>
          <button onClick={() => this.updateTab(2)}>Edit Question Tab</button>
          {this.state.selectedTab === 2 ? (
            <div>
              <EditQuestionPage
                question={this.state.selectedQ}
                q_title={q_title}
                q_type={q_type}
                selectedQuestionObject={selectedQuestionObject}
                updateQuestion={updateQuestion}
                updateQuestionTitle={updateQuestionTitle}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <br />
        <div>
          <button onClick={() => this.updateTab(3)}>Edit Survey Tab</button>
          {this.state.selectedTab === 3 ? (
            <div>
              <EditSurveyPage
                saveChanges={saveChanges}
                s_title={s_title}
                s_subtitle={s_subtitle}
                updateSurveyTitle={updateSurveyTitle}
                updateSurveySubTitle={updateSurveySubTitle}
                saveChangesKeyPress={saveChangesKeyPress}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <br />
      </div>
    );
  }
}
