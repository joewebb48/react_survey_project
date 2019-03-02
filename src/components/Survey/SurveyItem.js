import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export default class SurveyItem extends Component {
  deleteSurvey = () => {
    axios.delete(`/api/deleteSurvey/:id`).then(res => {
      console.log(res);
    });
  };
  render() {
    // console.log('SI', this.props);
    let { survey_id: id, title } = this.props.survey;
    console.log('which id is this', id);
    return (
      <div>
        {this.props.survey ? (
          <Card>
            <CardMedia
              style={{ height: 0, paddingTop: '5%' }}
              // image={this.props.survey.fields.surveyImage.fields.file.url}
              title={title}
            />
            <CardContent>
              <FormControlLabel
                control={<Switch color='primary' />}
                label='Active'
              />
              <IconButton aria-label='Delete' label='Delete Survey'>
                <DeleteIcon fontSize='large' />
              </IconButton>
              <Typography gutterBottom variant='headline' component='h2'>
                <Link to={`/admin/surveys/${id}`}>{title}</Link>
              </Typography>
              <Typography component='p'>
                {/* {this.props.fields.description} */}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button
                size='small'
                color='primary'
                href={`/admin/surveys/${id}`}
              > */}
              {/* <Link to={`/admin/surveys/${id}`}>{title}</Link> */}
              {/* </Button> */}
            </CardActions>
          </Card>
        ) : null}
      </div>
    );
  }
}
