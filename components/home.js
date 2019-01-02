import React, { Component } from 'react';
import { Container, Content, Text, Body, Card, CardItem, Left, Header, Title } from 'native-base';

const startText = `К нам поступил новый щенок. Возраст: 3 года. Порода:Питбуль.`

class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Новости
                        </Title>
                    </Body>
                </Header>
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