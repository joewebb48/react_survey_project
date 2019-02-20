import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { adminLoggedIn } from './redux/reducer';
import axios from 'axios';
import './App.css';
import Header from './components/containers/Header';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminLandingContainer from './components/containers/AdminLandingContainer';
import SurveyLandingPage from './components/containers/SurvayLandingPage';
import EditContainer from './components/containers/EditContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }
  componentDidMount() {
    axios.get(`/auth/currentAdmin`).then(res => {
      if (res.data) {
        this.props.adminLoggedIn(res.data);
      }
      this.setState({
        isLoading: false
      });
    });
  }
  render() {
    return this.state.isLoading ? (
      <div>...</div>
    ) : (
      <HashRouter>
        <div className='App'>
          <Header />

          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route exact path='/' component={Register} />
            <Route path='/landing' component={AdminLandingContainer} />
            <Route
              path='/admin/surveys/:surveyId'
              component={SurveyLandingPage}
            >
              <Route path='edit' component={EditContainer} />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default connect(
  null,
  { adminLoggedIn }
)(App);
