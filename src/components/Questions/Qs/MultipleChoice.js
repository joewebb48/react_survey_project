import React, { Component } from 'react';
import MultiChoiceOptionField from '../MultiChoiceOptionField';
import Typography from '@material-ui/core/Typography';

export default class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      question: this.props.question
    };
  }
  // componentDidMount() {
  //   this.setState({
  //     options: [...options]
  //   });
  // }
  render() {
    console.log('Mc:', this.state);
    const { title, question_id } = this.props.question;
    const { type, selectedQuestion } = this.props;
    // const { type } = this.props;

    const mappedOptions = this.state.options
      ? this.state.options.map((option, i) => {
          // console.log('option in checkbox:', option);
          return <MultiChoiceOptionField content={option.content} key={i} />;
        })
      : '';
    return (
      <div
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <div>
          <Typography color='primary'>
            <h1>{title}</h1>
          </Typography>
        </div>
        {mappedOptions}
      </div>
    );
  }
}
