import React, { Component } from 'react';
import QuestionListContainer from '../../Questions/QuestionListContainer';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';

export default class SurveyPreview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     questions: props.questions,
  //     options: props.options
  //   };
  // }
  render() {
    const { s_title, s_subtitle, questions } = this.props;
    const { selectedQuestion } = this.props;
    // const { questions, options } = this.state;

    return (
      <div className='survey_preview'>
        <header>
          <Typography color='primary' value={s_title} component='h1'>
            <h1>{s_title}</h1>
          </Typography>
          <Typography color='primary' value={s_title} component='h6'>
            <h6>{s_subtitle}</h6>
          </Typography>
        </header>

        <div className='fixedBox'>
          <QuestionListContainer
            selectedQuestion={selectedQuestion}
            questions={questions}
            // options={options}
          />
        </div>
      </div>
    );
  }
}
