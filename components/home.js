import React,{Component} from 'react';
import logo from '../img/logo.jpg';
import dog from '../img/dog.jpg';
import {Image, ScrollView, View} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Body,Card,CardItem, Left, Thumbnail } from 'native-base';

const startText = `К нам поступил новый щенок. Возраст: 3 года. Порода:Питбуль.`
const telephone = '+7(921)7414901';

class Home extends Component {
    render() {
        return(   
            <Container>
              <Content>
                  
                  <Card>
                      <CardItem>
                          <Left>
                              <Body>
                              <Text>Новый друг!</Text>
                                <Text note>Санкт-Петербург</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Body>
                          <Text>{startText}</Text>
                          </Body>
                      </CardItem>
                      
                  </Card>
                  <Card>
                      <CardItem>
                          <Left>
                              <Body>
                              <Text>Поступило 3кг корма!</Text>
                                <Text note>Санкт-Петербург</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Body>
                          <Text>Поступил новый корм Hills</Text>
                          </Body>
                      </CardItem>
                    
                  </Card>
                  <Card>
                      <CardItem>
                          <Left>
                              <Body>
                              <Text>Плюшу забрали домой!!</Text>
                                <Text note>Санкт-Петербург</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Body>
                          <Text>Плюша наконец-то нашла новых любящих хозяев!</Text>
                          </Body>
                      </CardItem>
                     
                  </Card>
              </Content>
        </Container>
        )
    }
    }

export default Home;