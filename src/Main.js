import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Row, Grid } from "react-native-easy-grid";
import HomeHeader from './components/HomeHeader';
import MyFooter from './components/MyFooter';
import MyCard from './components/MyCard';
import Conversation from './components/Conversation';

export default class Main extends React.Component {
  
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{height: 100}}>
          <HomeHeader/>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <ScrollView>
            <Conversation /> 
          </ScrollView>
        </Content>
        <MyFooter/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
