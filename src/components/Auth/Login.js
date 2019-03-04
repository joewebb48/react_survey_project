import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { adminLoggedIn } from '../../redux/reducer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
      // isLoading: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  handleClick = () => {
    axios
      .post(`/auth/login`, this.state)
      .then(res => {
        let admin = res.data;
        this.props.adminLoggedIn(admin);
      })
      .catch(err => {
        console.log(err.res);
        this.setState({
          error: err.res.data
        });
      });
  };
  render() {
    return this.props.isAuthenticated ? (
      <Redirect to='/landing' />
    ) : (
      <div className='loginPage'>
        <Paper className='loginPaper'>
          <Typography>
            <h1>Login</h1>
          </Typography>
          <FormControl>
            <input
              style={{ margin: '5%' }}
              type='text'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl>
            <input
              style={{ margin: '5%' }}
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormControl>
          <br />

          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={this.handleClick}
          >
            Submit
          </Button>
          {this.state.error}
          {this.state.isLoading ? (
            <p className='saving'>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </p>
          ) : (
            <div />
          )}
          <h6 style={{ marginTop: 20 }}>
            Need to register an account?{' '}
            <Link to='/register'>Regsiter Here...</Link>
          </h6>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  let { isAuthenticated } = reduxState;
  return {
    isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  { adminLoggedIn }
)(Login);
