import React, { Component } from 'react';
import AddQuestionPage from '../Questions/EditQs/EditPages/AddQuestionPage';
import EditQuestionPage from '../Questions/EditQs/EditPages/EditQuestionPage';
import EditSurveyPage from '../Questions/EditQs/EditPages/EditSurveyPage';

export default class EditContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 1
    };
  }
  updateTab(tabType) {
    this.setState({
      selectedTab: tabType
    });
  }
  render() {
    console.log('edit container', this.props);
    const {
      s_title,
      s_subtitle,
      q_title,
      q_type,
      addToQuestions,
      questions,
      selectedQuestion,
      updateQuestion,
      updateQuestionTitle,
      updateSurveySubTitle,
      updateSurveyTitle
    } = this.props;
    let { selectedTab } = this.state;
    return (
      <div>
        <h2>EditContainer</h2>

        <div>
          <button onClick={() => this.updateTab(1)}>Add Q</button>
          {this.state.selectedTab === 1 ? (
            <div>
              <AddQuestionPage addToQuestions={addToQuestions} />
            </div>
          ) : (
            ''
          )}
        </div>

        {/* // */}
        <br />
        <div>
          <button onClick={() => this.updateTab(2)}>Edit Q</button>
          {this.state.selectedTab === 2 ? (
            <div>
              <EditQuestionPage
                questions={questions}
                q_title={q_title}
                q_type={q_type}
                selectedQuestion={selectedQuestion}
                updateQuestion={updateQuestion}
                updateQuestionTitle={updateQuestionTitle}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <br />
        {/* // */}
        <div>
          <button onClick={() => this.updateTab(3)}>Edit S</button>
          {this.state.selectedTab === 3 ? (
            <div>
              <EditSurveyPage
                s_title={s_title}
                s_subtitle={s_subtitle}
                updateSurveyTitle={updateSurveyTitle}
                updateSurveySubTitle={updateSurveySubTitle}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <br />
        <button>Save Changes</button>
      </div>
    );
  }
}
