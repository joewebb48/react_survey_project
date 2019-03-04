import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default class EditSurveyPage extends Component {
  // updateTitle() {
  //   this.props.updateSurveyTitle({
  //     title: this.title.value
  //   });
  // }
  // updateSurveyTitle(value) {
  //   this.props.updateSurveySubTitle({
  //     subTitle: value
  //   });
  // }
  render() {
    let {
      s_title: title,
      s_subtitle: subTitle,
      updateSurveyTitle,
      updateSurveySubTitle,
      saveChangesKeyPress,
      saveChanges
    } = this.props;
    return (
      <div className='editorCard'>
        <Card>
          <CardContent>
            <Typography color='primary' component='h1'>
              <h1>Edit Survey</h1>
            </Typography>
            <div>
              <label>Enter New Title</label>
              <TextField
                id='standard-name'
                margin='normal'
                type='text'
                value={title}
                ref={input => {
                  this.title = input;
                }}
                onChange={e => updateSurveyTitle(e.target.value)}
                onKeyPress={e => saveChangesKeyPress(e)}
              />
            </div>
            <div>
              <label>Enter New Subtitle</label>
              <TextField
                id='standard-name'
                margin='normal'
                value={subTitle}
                ref={input => {
                  this.subTitle = input;
                }}
                onChange={e => updateSurveySubTitle(e.target.value)}
                onKeyPress={e => saveChangesKeyPress(e)}
              />
            </div>
            <Button
              variant='contained'
              size='small'
              color='primary'
              onClick={e => saveChanges(e)}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
