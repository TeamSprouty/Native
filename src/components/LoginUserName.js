import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content,Text, Title, Form, Item, Input, Label } from 'native-base';
import NiceButton from './NiceButton';

export default class LoginUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ''
    }
    this.titleHandler = this.titleHandler.bind(this);
  }

  titleHandler(text) {
    this.setState({email: text});
  } 

  render() {
    return (
      <Container>
        <Content 
          contentContainerStyle={styles.container}
        >
          <Title style={styles.color}>Sprouty</Title>
          <Form style={styles.form}>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input 
                onChangeText={this.titleHandler}
              />
            </Item>
            <NiceButton 
              color={'#FF495C'} 
              text={'Password'} 
              link={'/login/password'} 
              addEmail={this.props.addEmail} email={this.state.email} 
              history={this.props.history
            }/>
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
  form: {
    alignSelf: 'stretch',
    padding: 30
  },
  title: {
    fontSize: 60, 
    color: '#FCFCFC'
  }
});

