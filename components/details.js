import React, { Component } from 'react';
import { Container, Content, Header, Title, Body } from 'native-base';
import CatListItem from '../components/catListItem';
import axios from 'axios';

class PhotoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { pets: [] }
        axios.get('http://10.0.2.2:3000/cats')
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
                            Кошки
                        </Title>
                    </Body>
                </Header>
                <Content>
                    {this.state.pets.map((pet) => { return <CatListItem key={pet.id} pet={pet} /> })}
                </Content>
            </Container>
        );
    }
}

export default PhotoDetails;