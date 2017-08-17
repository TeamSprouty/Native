import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Button, Title, Form, Item, Input, Label } from 'native-base';
import { withRouter } from 'react-router-native';
import PassButton from './PassButton';

export default class LoginPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }
    this.titleHandler = this.titleHandler.bind(this);
  }

  titleHandler(text) {
    this.setState({ password: text });
  }

  render() {
    console.log(this.props);

    return (
      <Container>
        <Content
          contentContainerStyle={styles.container}
        >
          <Title style={styles.color}>Sprouty</Title>
          <Form style={styles.form}>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input
                onChangeText={this.titleHandler}
              />
            </Item>
            <PassButton
              color={'#FF495C'}
              text={'Password'}
              link={'/home'}
              authUser={this.props.authUser} user={{email: this.props.user.email, password: this.state.password}}
              history={this.props.history
              } />
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
