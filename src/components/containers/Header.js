import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLoggedOut } from '../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  logout = () => {
    axios
      .get('/auth/logout')
      .then(res => {
        this.props.adminLoggedOut();
      })
      .then(<Redirect to='/login' />);
  };
  render() {
    return (
      <div
        style={
          {
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'space-around',
            // alignItems: 'flex-end'
            // borderBottom: '1px solid black',
            // height: '30px',
            // padding: '40px'
          }
        }
      >
        <AppBar position='static'>
          <Toolbar>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%'
                // alignItems: 'flex-end'
              }}
            >
              {/* <Typography variant='title' color='inherit'> */}
              <Link
                to='/landing'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div id='logo'>
                  {/* <i class='fas fa-home' style={{backgroundColor: 'white', paddingTop: '5px'}}/> */}
                  <h4 style={{ color: 'white' }}>MyEasySurvey.com</h4>
                </div>
              </Link>
              <div className='headerNavWide'>
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
              <div className='mobileHeaderNavbar'>
                {/* <Button> */}
                <i class='fas fa-bars'>
                  {/* <Menu id='simple-menu'>
                      {this.props.isAuthenticated ? (
                        <MenuItem>
                          <h1 onClick={this.logout}>Logout</h1>
                        </MenuItem>
                      ) : (
                        <MenuItem> */}
                  <h1>
                    <Link
                      style={{ textDecoration: 'none', color: 'black' }}
                      to='/login'
                    >
                      Login
                    </Link>
                  </h1>
                  {/* </MenuItem>
                      )}
                    </Menu> */}
                </i>
                {/* </Button> */}
              </div>
              {/* </Typography> */}
            </div>
          </Toolbar>
        </AppBar>
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
