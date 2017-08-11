import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content,Text, Button, Title } from 'native-base';
import { withRouter } from 'react-router-native';

const NiceButton = withRouter(({ history, color, text}) => (
  <Button block light
    style={{margin: 20, backgroundColor: color}}
    onPress={() => {
      history.push('/signup')
    }}
  >
    <Text style={{color: '#FCFCFC'}}>{text}</Text>
  </Button>
))

export default class LandingPage extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Title style={{fontSize: 60, color: '#FCFCFC'}}>Sprouty</Title>
          <NiceButton color={'#256EFF'} text={'Login'}/>
          <NiceButton color={'#FF495C'} text={'Sign Up'}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3DDC97',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
