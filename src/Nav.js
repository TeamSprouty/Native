import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import LandingPage from './components/LandingPage';
import Main from './Main';

const Nav = () => (
  <NativeRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/signup" component={Main}/>
      </Switch>
  </NativeRouter>
)

export default Nav;
