import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Nav from './src/Nav';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
      </Provider>
    );
  }
}
