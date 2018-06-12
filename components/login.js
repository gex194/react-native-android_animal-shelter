import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Label, Left, Icon, Right, Text, FooterTab } from 'native-base';

const LoginForm = ({history}) => {
        return (
            <Container>
          <Content>
            <Form>
              <Item floatingLabel>
              <Label>Ваше имя</Label>
              <Input/>
              </Item>
              <Item floatingLabel>
              <Label>Ваша фамилия</Label>
              <Input/>
              </Item>
              <Item floatingLabel>
              <Label>Номер телефона</Label>
              <Input/>
              </Item>
            </Form>
            <Button block style={{marginTop:50}}>
              <Text>Отправить</Text>
            </Button>
          </Content>
        </Container>
          );
    }

export default LoginForm;