import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import logo from '../img/logo.jpg';
import dog from '../img/dog.jpg';
import { Container, Header, Content, Icon, Text, Body, Thumbnail, Left, Card, CardItem, Title } from 'native-base';

const startText = `Приют для кошек и собак. Любим животных, звоните, отдадим в хорошие руки!`
const telephone = '+7(921)7414901';

class StartPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Основная Информация</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={logo} style={{ width: 75, height: 75 }} />
                                <Body>
                                    <Text>Приют "Ржевка"</Text>
                                    <Text note>Санкт-Петербург</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={dog} style={{ height: 200, width: 300, flex: 1 }} />
                                <Text>{startText}</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Icon name="ios-phone-portrait" />
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
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    }
})
export default StartPage;