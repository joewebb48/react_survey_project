import React, { Component } from 'react';
import axios from 'axios';
import AddQuestionPage from '../Questions/EditQs/EditPages/AddQuestionPage';
import EditQuestionPage from '../Questions/EditQs/EditPages/EditQuestionPage';
import EditSurveyPage from '../Questions/EditQs/EditPages/EditSurveyPage';
import Button from '@material-ui/core/Button';
// import HUE from '@material-ui/core/colors/HUE';

// const color = HUE[SHADE];

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
      addNewOption,
      deleteOption,
      saveChanges
    } = this.props;
    return (
      <div>
        <h2>Edit Survey</h2>

        <div>
          <Button
            color='#00e676'
            variant='contained'
            size='medium'
            onClick={() => this.updateTab(1)}
          >
            Add Question
          </Button>
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
          <Button
            color='#00e676'
            variant='contained'
            size='medium'
            onClick={() => this.updateTab(2)}
          >
            Edit Question Tab
          </Button>
          {this.state.selectedTab === 2 ? (
            <div>
              <EditQuestionPage
                question={this.state.selectedQ}
                q_title={q_title}
                q_type={q_type}
                selectedQuestionObject={selectedQuestionObject}
                updateQuestion={updateQuestion}
                updateQuestionTitle={updateQuestionTitle}
                // addNewOption={addNewOption}
                // deleteOption={deleteOption}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <br />
        <div>
          <Button
            color='#00e676'
            variant='contained'
            size='medium'
            onClick={() => this.updateTab(3)}
          >
            Edit Survey Tab
          </Button>
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
