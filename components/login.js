import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Label, Text, Body, Title } from 'native-base';
import { View } from 'react-native';
import axios from 'axios';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', number: '', uploadData: false };
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Свяжитесь с нами
          </Title>
          </Body>
        </Header>
        <Content>
          <View>
            <Form>
              <Item floatingLabel>
                <Label>Ваше имя</Label>
                <Input value={this.state.firstName} onChangeText={(firstName) => this.setState({ firstName })} />
              </Item>
              <Item floatingLabel>
                <Label>Ваша фамилия</Label>
                <Input value={this.state.lastName} onChangeText={(lastName) => this.setState({ lastName })} />
              </Item>
              <Item floatingLabel>
                <Label>Номер телефона</Label>
                <Input value={this.state.number} onChangeText={(number) => this.setState({ number })} />
              </Item>
              <Button block style={{ marginTop: 50 }}
                onPress={() => {
                  this.setState({ uploadData: true });
                  let data = {
                    firstname: this.state.firstName,
                    lastname: this.state.lastName,
                    number: this.state.number
                  }
                  axios.post('http://10.0.2.2:3000/user_add', data)
                }}>
                <Text>Отправить</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginForm;