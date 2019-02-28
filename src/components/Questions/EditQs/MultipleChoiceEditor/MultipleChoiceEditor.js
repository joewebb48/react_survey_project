import React, { Component } from 'react';
import axios from 'axios';
import MultiChoiceOptionField from '../../MultiChoiceOptionField';
// import CheckBoxOptionField from '../../CheckBoxOptionField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class MultipleChoiceEditor extends Component {
  constructor(props) {
    super(props);
    this.input = {};
    this.state = {
      options: [],
      optionTitle: '',
      newQuestionTitle: ''
    };
  }
  handleChange = value => {
    this.setState({
      newQuestionTitle: value
    });
  };
  addNewOption = () => {
    axios
      .post(`/api/addNewOption/${this.props.question.question_id}`)
      .then(res => {
        console.log(res);
      });
  };
  deleteOption = id => {
    // console.log(id);
    axios.delete(`/api/deleteOption/${id}`).then(res => {
      console.log(`delete option returning`, res.data);
    });
  };
  editOptionContent = content => {
    axios.put(`/api/editOptionContent`, content).then(res => {
      console.log(`edit opion content res.data`, res.data);
    });
  };
  editQuestionTitle = title => {
    console.log('title', title);
    const { question_id } = this.props.question;
    axios.put(`/api/editQuestionTitle/${question_id}`, { title }).then(res => {
      console.log('edit question res', res.data);
    });
  };
  render() {
    console.log('MCEDITOR PROPS:', this.props);
    const {
      options,
      questionTitle,
      updateQuestion,
      updateQuestionTitle
    } = this.props;
    return (
      <div>
        <Card>
          <CardContent>
            <Typography>
              <h2>{questionTitle}</h2>
            </Typography>
            <div>
              {/* <label>Edit Question Title</label> */}
              <div>
                <TextField
                  id='standard-name'
                  margin='normal'
                  type='text'
                  placeholder={`Edit..${questionTitle}`}
                  onChange={e => this.handleChange(e.target.value)}
                />
              </div>
              <Button
                variant='contained'
                size='small'
                color='primary'
                onClick={() =>
                  this.editQuestionTitle(this.state.newQuestionTitle)
                }
              >
                Save Title Edit
              </Button>
            </div>
            <div>
              <h4>Add New Options</h4>

              <Fab
                style={{ margin: '15px' }}
                color={green}
                // color='green'
                aria-label='Add'
                onClick={this.addNewOption}
              >
                <AddIcon fontSize='small' />
              </Fab>
              <br />
              <h4>Edit Options</h4>
              {options.map((option, i) => {
                return (
                  <div>
                    <TextField
                      id='standard-name'
                      margin='normal'
                      type='text'
                      value={option.content}
                    />
                    <div />
                    <IconButton
                      aria-label='Delete'
                      // className={classes.margin}
                      onClick={() => this.deleteOption(option.options_id)}
                    >
                      <DeleteIcon fontSize='medium' />
                    </IconButton>
                  </div>
                );
              })}
              <Button variant='contained' size='small' color='primary'>
                SUBMIT CHANGES
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default MultipleChoiceEditor;
