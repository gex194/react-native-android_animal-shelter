import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, Body, Button, Thumbnail, Left, Card, CardItem } from 'native-base';
import CatListItem from '../components/catListItem';
import cat from '../img/cat.jpg';
import axios from 'axios';

class PhotoDetails extends Component {
    constructor(props) {
        super(props);
        this.state={pets: []}
        axios.get('http://10.0.2.2:3000/cats')
            .then((response)=>{
      this.setState({pets: response.data})
    })
    }
    render() {
        return(
            <Container>
                <Content>
              {this.state.pets.map((pet)=>{ return <CatListItem key={pet.id} pet={pet} />})}
              </Content>
            </Container>
        );
    }
}

export default PhotoDetails;