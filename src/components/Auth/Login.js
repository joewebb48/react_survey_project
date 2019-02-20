import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

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
      <div>
        <h1>Login</h1>
        <br />
        <input
          type='text'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick}>Submit</button>
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
          Need to register an account?{' '}
          <Link to='/register'>Regsiter Here...</Link>
        </p>
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
