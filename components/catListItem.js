import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, Body, Button, Thumbnail, Left, Card, CardItem } from 'native-base';
import cat from '../img/cat.jpg';

class CatListItem extends Component {
render() {
    return(
        
                  <Card>
                      <CardItem>
                          <Left>
                              <Body>
                                <Text>{this.props.pet.name}</Text>
                                <Text note>{this.props.pet.type}</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Text>Возраст: {this.props.pet.age} года.</Text>
                      </CardItem>
                      <CardItem>
                          <Body>
                          <Image source={cat} style={{height:200, width:300,flex:1}} />
                          <Text>{this.props.pet.description}</Text>
                          </Body>
                      </CardItem>
                  </Card>
              
    )
}

}

export default CatListItem;