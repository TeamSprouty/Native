import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content,Text, Button, Title, Form, Item, Input, Label } from 'native-base';
import { withRouter } from 'react-router-native';

const NiceButton = withRouter(({ history, color, text, link}) => (
  <Button block light
    style={{margin: 20, backgroundColor: color}}
    onPress={() => {
      history.push(link)
    }}
  >
    <Text style={{color: '#FCFCFC'}}>{text}</Text>
  </Button>
))

export default class LoginPassword extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Title style={{fontSize: 60, color: '#FCFCFC'}}>Sprouty</Title>
          <Form style={{alignSelf: 'stretch', padding: 30}}>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <NiceButton color={'#FF495C'} text={'Go'} link={'/home'} />
          </Form>
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
