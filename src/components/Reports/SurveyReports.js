import React, { Component } from 'react';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import { LineChart, Line } from 'recharts';
import Tooltip from 'recharts/lib/component/Tooltip';
import Example from './ExampleReports';
import Example2 from './examples/Example2';
import PieChartExample from './examples/PieChartExample';
import Example3 from './examples/Example3';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Reports/Reports.css';

export default class SurveyReports extends Component {
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
        console.log('Survey Reports', res.data);
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
  render() {
    // let { width, height, data } = this.props;
    console.log('reports props', this.props);
    return (
      <div>
        <h1>{this.state.s_title}</h1>
        <Paper
          className='reportsContainer'
          style={{ backgroundColor: 'white' }}
        >
          <Card className='exmapleReport'>
            <CardContent>
              <Example3 />
            </CardContent>
          </Card>
          <Card className='exmapleReport'>
            <CardContent>
              <Example />
            </CardContent>
          </Card>
          <Card className='exmapleReport'>
            <CardContent>
              <Example2 />
            </CardContent>
          </Card>
          <Card className='exmapleReport'>
            <CardContent>
              <PieChartExample />
            </CardContent>
          </Card>
        </Paper>
      </div>
    );
  }
}
