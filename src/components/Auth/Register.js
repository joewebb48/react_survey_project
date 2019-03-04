import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { adminLoggedIn } from '../../redux/reducer';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      isLoading: false
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
      .post('/auth/register', this.state)
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
      <div className='content'>
        {this.state.errorMessage ? (
          <div className='error-message-div error-message'>
            <p>{this.state.errorMessage}</p>
            <button onClick={this.handleErrorClick} className='error-button'>
              X
            </button>
          </div>
        ) : (
          <div />
        )}
        <div className='loginPage'>
          <Paper className='loginPaper'>
            <Typography>
              <h1>Registration</h1>
            </Typography>
            <br />
            <FormControl>
              <input
                style={{ margin: '5%' }}
                type='text'
                name='userName'
                placeholder='userName'
                value={this.state.userName}
                onChange={this.handleChange}
              />
            </FormControl>
            <br />
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
          </Paper>
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

          <p style={{ marginTop: 20 }}>
            Already have an account? <Link to='/login'>Log in here...</Link>
          </p>
        </div>
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
)(Register);
