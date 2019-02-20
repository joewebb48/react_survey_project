import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLoggedOut } from '../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Header extends Component {
  logout = () => {
    axios.get('/auth/logout').then(res => {
      this.props.adminLoggedOut();
    });
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid black',
          height: '30px',
          padding: '40px'
        }}
      >
        <div id='logo'>
          <h4>MY Survey App</h4>
        </div>
        {this.props.isAuthenticated ? (
          <h1 onClick={this.logout}>Logout</h1>
        ) : (
          <h1>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to='/login'
            >
              Login
            </Link>
          </h1>
        )}
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
  { adminLoggedOut }
)(Header);
