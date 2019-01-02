import React, { Component } from 'react';
import { Container, Content, Header, Body, Title } from 'native-base';
import DogListItem from '../components/dogListItem';
import axios from 'axios';

class PhotoDetailsDog extends Component {
    constructor(props) {
        super(props);
        this.state = { pets: [] }
        axios.get('http://10.0.2.2:3000/dogs')
            .then((response) => {
                this.setState({ pets: response.data })
            })
    }
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Собаки
                        </Title>
                    </Body>
                </Header>
                <Content>
                    {this.state.pets.map((pet) => { return <DogListItem key={pet.id} pet={pet} /> })}
                </Content>
            </Container>
        );
    }
}

export default PhotoDetailsDog;