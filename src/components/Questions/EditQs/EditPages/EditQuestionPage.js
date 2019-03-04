import React, { Component } from 'react';
import { QuestionTypes } from '../../../Constant/ConstantQuestions';
import MultipleChoiceEditor from '../MultipleChoiceEditor/MultipleChoiceEditor';
import Typography from '@material-ui/core/Typography';
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
    const { selectedQuestionObject, deleteQuestion } = this.props;
    this.setState({
      findType: type_id,
      Q: selectedQuestionObject,
      Options: options,
      Q_title: question_title,
      Q_ID: question_id
    });
  }

  render() {
    // console.log('EQP: PROPS:', this.props);
    // console.log('EQP: STATE:', this.state);
    const mappedEditQuestion = type => {
      const {
        question,
        updateQuestion,
        updateQuestionTitle,
        addToOptions,
        deleteOption
      } = this.props;
      const { Q, findType, Options, Q_title, Q_ID } = this.state;
      switch (type) {
        case 1:
          return (
            <MultipleChoiceEditor
              {...question}
              question={this.props.selectedQuestionObject}
              options={Options}
              questionTitle={Q_title}
              updateQuestion={updateQuestion}
              updateQuestionTitle={updateQuestionTitle}
              deleteQuestion={this.props.deleteQuestion}
              addToOptions={addToOptions}
              // deleteOption={deleteOption}
            />
          );

        case 5:
          return (
            <MultipleChoiceEditor
              {...question}
              question={this.props.selectedQuestionObject}
              options={Options}
              questionTitle={Q_title}
              updateQuestion={updateQuestion}
              updateQuestionTitle={updateQuestionTitle}
              deleteQuestion={this.props.deleteQuestion}
              addToOptions={addToOptions}
              // deleteOption={deleteOption}
            />
          );

        case 4:
          return (
            <MultipleChoiceEditor
              {...question}
              question={this.props.selectedQuestionObject}
              options={Options}
              updateQuestion={updateQuestion}
              questionTitle={Q_title}
              updateQuestionTitle={updateQuestionTitle}
              deleteQuestion={this.props.deleteQuestion}
              addToOptions={addToOptions}
              // deleteOption={deleteOption}
            />
          );

        case 3:
          return (
            <TextEditor
              {...question}
              question={this.props.selectedQuestionObject}
              options={Options}
              updateQuestion={updateQuestion}
              questionTitle={Q_title}
              updateQuestionTitle={updateQuestionTitle}
              deleteQuestion={this.props.deleteQuestion}
            />
          );

        case 2:
          return (
            <TextEditor
              {...question}
              question={this.props.selectedQuestionObject}
              options={Options}
              updateQuestion={updateQuestion}
              questionTitle={Q_title}
              updateQuestionTitle={updateQuestionTitle}
              deleteQuestion={this.props.deleteQuestion}
            />
          );

        default:
          break;
      }
    };
    // mappedEditQuestion();
    // console.log(mappedEditQuestion());
    return (
      <div
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center'
      // }}
      >
        <Typography className='editQTitle' color='primary' component='h1'>
          <h1>Edit Question</h1>
        </Typography>

        {mappedEditQuestion(this.state.findType)}
      </div>
    );
  }
}
