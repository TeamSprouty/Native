import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content,Text, Button, Title, Form, Item, Input, Label } from 'native-base';
import { withRouter } from 'react-router-native';

const NiceButton = withRouter(({ history, color, text, link,addEmail, email}) => (
  <Button block light
    style={{margin: 20, backgroundColor: color}}
    onPress={() => {
      addEmail(email);
      history.push(link)
    }}
  >
    <Text style={{color: '#FCFCFC'}}>{text}</Text>
  </Button>
))

export default class LoginUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ''
    }
    this.titleHandler = this.titleHandler.bind(this);
  }

  titleHandler(e) {
    let {value} = e.target;
    console.log(e.target.value);
    this.setState({email: value});
  } 

  render() {
    
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Title style={{fontSize: 60, color: '#FCFCFC'}}>Sprouty</Title>
          <Form style={{alignSelf: 'stretch', padding: 30}}>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input onChange={this.titleHandler}/>
            </Item>
            <NiceButton color={'#FF495C'} text={'Password'} link={'/login/password'} addEmail={this.props.addEmail} email={this.state.email}/>
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

