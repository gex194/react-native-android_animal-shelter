import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Image} from 'react-native';
import axios from 'axios';
import cat_catalog from '../img/cat_catalog.jpg';
import cat_icon from '../img/cat_icon.png';
import dog_catalog from '../img/dog_catalog.jpg';
import dog_icon from '../img/dog_icon.png';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Right, Card, CardItem, Thumbnail, Body } from 'native-base';

class Photos extends Component  {
  constructor(props){
    super(props);
    this.state={ pets:[], showPets: false, petName: '' }
    
  }
  render() {
        return(
          <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={cat_icon} />
                <Body>
                  <Text>Каталог кошек</Text>
                  <Text note>Полный список</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={cat_catalog} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={()=>{this.props.navigation.navigate('Details')}}>
                  <Icon active name="chatbubbles" />
                  <Text>Показать каталог</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={dog_icon} />
                <Body>
                  <Text>Каталог собак</Text>
                  <Text note>Полный список</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={dog_catalog} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={()=>{this.props.navigation.navigate('DetailsDog')}}>
                  <Icon active name="chatbubbles" />
                  <Text>Показать каталог</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </Content>
        </Container>
        );
      }
    }
  

export default Photos;