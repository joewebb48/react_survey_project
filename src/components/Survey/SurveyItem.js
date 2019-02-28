import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class SurveyItem extends Component {
  render() {
    // console.log('SI', this.props);
    let { survey_id: id, title } = this.props.survey;
    return (
      <div>
        {this.props.survey ? (
          <Card>
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              // image={this.props.survey.fields.surveyImage.fields.file.url}
              title={title}
            />
            <CardContent>
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
