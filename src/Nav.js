import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import LandingPage from './components/LandingPage';
import LoginUsername from './components/LoginUserName';
import LoginPassword from './components/LoginPassword';
import Main from './Main';

const Nav = () => (
  <NativeRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Main}/>
        <Route exact path="/login/username" component={LoginUsername}/>
        <Route exact path="/login/password" component={LoginPassword}/>
      </Switch>
  </NativeRouter>
)

export default Nav;
