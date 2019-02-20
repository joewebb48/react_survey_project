import React, { Component } from 'react';
import { QuestionTypes } from '../../../Constant/ConstantQuestions';
import MultipleChoiceEditor from '../MultipleChoiceEditor/MultipleChoiceEditor';
import TextEditor from '../TextEditor/TextEditor';

const questionEditorMap = {
  [QuestionTypes.CHECKBOXES]: (question, updateQuestion) => {
    return (
      <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
    );
  },
  [QuestionTypes.DROPDOWN]: (question, updateQuestion) => {
    return (
      <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
    );
  },
  [QuestionTypes.MULTI_CHOICE]: (question, updateQuestion) => {
    return (
      <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
    );
  },
  [QuestionTypes.SINGLE_LINE_TEXT]: (question, updateQuestion) => {
    return <TextEditor {...question} updateQuestion={updateQuestion} />;
  },
  [QuestionTypes.MUTLI_LINE_TEXT]: (question, updateQuestion) => {
    return <TextEditor {...question} updateQuestion={updateQuestion} />;
  }
};

export default class EditQuestionPage extends Component {
  render() {
    console.log('EditQuestionPage:', this.props);
    const { selectedQuestion: question, updateQuestion } = this.props;
    let mapped = '';
    if (questionEditorMap[question.type]) {
      mapped = questionEditorMap[question.type](question, updateQuestion);
    }
    return (
      <div>
        <h1>EditQuestinPage</h1>
        {mapped}
      </div>
    );
  }
}
