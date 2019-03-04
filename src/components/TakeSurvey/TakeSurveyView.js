// have a react route that would survey/survey_id...
// for each survey react-router-.go.. go to .survey.survey_id... that wil load react componenet
// use componetne did mount. use the ID off aprams make an axios rewuest to load up the survey questions.
// .
// take all the information on the clickes and basically on submit send all the information to the ansqwers database table.

// -- populate the link that loads all the questions survey.
import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import SingleLineText from '../Questions/Qs/SingleLineText';
import MultiLineText from '../Questions/Qs/MultiLineText';
import MultipleChoice from '../Questions/Qs/MultipleChoice';
import Checkbox from '../Questions/Qs/CheckBox';
import Dropdown from '../Questions/Qs/Dropdown';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './TakeSurvey.css';

export default class TakeSurveyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s_title: '',
      s_subtitle: '',
      question_title: '',
      questions: []
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.surveyId);
    axios
      .get(`/api/getSurveyToTake/${this.props.match.params.surveyId}`)
      .then(res => {
        console.log('Take Survey Res', res.data);
        this.setState({
          questions: res.data,
          s_title: res.data[0].surveyInfo[0].title,
          s_subtitle: res.data[0].surveyInfo[0].subtitle
        });
      })
      .catch(err => {
        console.log('axios.get options', err);
      });
  }
  questionType = (type, question, i) => {
    switch (type) {
      case 2:
        return (
          // <SingleLineText
          //   className='questionTake'
          //   type={type}
          //   // selectedQuestion={selectedQuestion}
          //   question={question}
          //   key={i}
          // />
          <div>
            <Typography color='primary'>
              <h1 className=''>{question.title}</h1>
            </Typography>
            <div className='f'>
              <TextField
                id='outlined-read-only-input'
                margin='normal'
                variant='outlined'
                InputProps={{
                  readOnly: true
                }}
                type='text'
                className='f'
                placeholder={`Content...`}
                name={question.question_id}
              />
            </div>
          </div>
        );

      case 3:
        return (
          // <MultiLineText
          //   className='questionTake'
          //   type={type}
          //   // selectedQuestion={selectedQuestion}
          //   question={question}
          //   key={i}
          // />
          <div>
            <Typography color='primary'>
              <h1 className=''>{question.title}</h1>
            </Typography>
            {/* <IconButton aria-label='Delete' label='Delete Survey'>
          <DeleteIcon fontSize='small' />
        </IconButton> */}
            <div className='f'>
              <TextField
                id='outlined-textarea'
                placeholder={`Content...`}
                // label='Content...'
                // placeholder='Placeholder'
                // InputProps={{
                //   readOnly: true
                // }}
                margin='normal'
                variant='outlined'
                // type='textarea'
                className='f'
                // placeholder={`Content...`}
                name={question.question_id}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <MultipleChoice
            className='questionTake'
            type={type}
            // selectedQuestion={selectedQuestion}
            options={question.options}
            question={question}
            key={i}
          />
        );

      case 5:
        return (
          <Checkbox
            className='questionTake'
            type={type}
            // selectedQuestion={selectedQuestion}
            options={question.options}
            question={question}
            key={i}
          />
        );

      case 1:
        return (
          <Dropdown
            className='questionTake'
            type={type}
            // selectedQuestion={selectedQuestion}
            options={question.options}
            question={question}
            key={i}
          />
        );

      default:
        break;
    }
  };

  render() {
    const { questions } = this.state;
    const mappedQuestions = questions.map((question, i) => {
      return this.questionType(question.type_id, question, i);
    });
    console.log(this.state);
    return (
      <div className='takeSurveyContainer'>
        <form classname='takeSurveyForm'>
          <Paper id='takeSurveyPaper'>
            <header style={{ boxSizing: 'border-box' }}>
              <h1
                style={{
                  fontSize: '40px',
                  marginTop: '20px',
                  marginBottom: '10px',
                  fontWeight: '500',
                  lineWeight: '1.1'
                }}
              >
                {this.state.s_title}
              </h1>
            </header>
            <p>How DO I HIDE THE NAV BAR</p>
            <div className='questionList'>{mappedQuestions}</div>
          </Paper>
        </form>
        <div>
          <Button variant='contained' size='small' color='primary'>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
