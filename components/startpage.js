import React,{Component} from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import background from '../img/background.jpg';
import logo from '../img/logo.jpg';
import dog from '../img/dog.jpg';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, Body, Button, Thumbnail, Left, Card, CardItem } from 'native-base';

const startText = `Приют для кошек и собак. Любим животных, звоните, отдадим в хорошие руки!`
const telephone = '+7(921)7414901';

class StartPage extends Component {
    render() {
        return(
             <Container>
                 <Header>
                     <Text style={{color:'white',fontSize:25}}>Основная Информация</Text>
                 </Header>
              <Content>
                  <Card>
                      <CardItem>
                          <Left>
                              <Thumbnail source={logo} style={{width:75,height:75}} />
                              <Body>
                              <Text>Приют "Ржевка"</Text>
                                <Text note>Санкт-Петербург</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Body>
                          <Image source={dog} style={{height:200, width:300,flex:1}} />
                          <Text>{startText}</Text>
                          </Body>
                      </CardItem>
                      <CardItem footer>
                          <Icon name="ios-phone-portrait"/>
                          <Text>{telephone}</Text>
                      </CardItem>
                  </Card>
              </Content>
        </Container>
        )
    }
    }

    const styles = StyleSheet.create({
        startPageStyle: {
        flex:1,
        justifyContent: 'center',
        flexDirection:'column'
        }
    })
export default StartPage;