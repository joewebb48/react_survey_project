import React, { Component } from 'react';
import { QuestionTypes } from '../../../Constant/ConstantQuestions';
import MultipleChoiceEditor from '../MultipleChoiceEditor/MultipleChoiceEditor';
import TextEditor from '../TextEditor/TextEditor';

export default class EditQuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      findType: [],
      Q: [],
      Options: [],
      Q_title: '',
      Q_ID: 0
    };
  }
  componentWillReceiveProps(props) {
    const {
      question,
      type_id,
      options,
      question_id,
      question_title
    } = props.selectedQuestionObject;
    this.setState({
      findType: type_id,
      Q: question,
      Options: options,
      Q_title: question_title,
      Q_ID: question_id
    });
  }

  render() {
    const mappedEditQuestion = type => {
      const { question, updateQuestion, updateQuestionTitle } = this.props;
      const { Q, findType, Options, Q_title, Q_ID } = this.state;
      switch (type) {
        case 1:
          return (
            <MultipleChoiceEditor
              {...question}
              question={Q}
              options={Options}
              questionTitle={Q_title}
              updateQuestion={updateQuestion}
              updateQuestionTitle={updateQuestionTitle}
            />
          );

        case 5:
          return (
            <MultipleChoiceEditor
              {...question}
              question={Q}
              options={Options}
              questionTitle={Q_title}
              updateQuestion={updateQuestion}
              updateQuestionTitle={updateQuestionTitle}
            />
          );

        case 4:
          return (
            <MultipleChoiceEditor
              {...question}
              question={Q}
              options={Options}
              updateQuestion={updateQuestion}
              questionTitle={Q_title}
              updateQuestionTitle={updateQuestionTitle}
            />
          );

        case 3:
          return (
            <TextEditor
              {...question}
              question={Q}
              options={Options}
              updateQuestion={updateQuestion}
              questionTitle={Q_title}
              updateQuestionTitle={updateQuestionTitle}
            />
          );

        case 2:
          return (
            <TextEditor
              {...question}
              question={Q}
              options={Options}
              updateQuestion={updateQuestion}
              questionTitle={Q_title}
              updateQuestionTitle={updateQuestionTitle}
            />
          );

        default:
          break;
      }
    };
    // mappedEditQuestion();
    // console.log(mappedEditQuestion());
    return (
      <div>
        <h3>Edit Question</h3>
        {mappedEditQuestion(this.state.findType)}
      </div>
    );
  }
}
