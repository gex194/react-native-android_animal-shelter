import React from 'react';
import mapLocation from '../img/map.jpg';
import { Image } from 'react-native';
import { Container, Body, Card, CardItem, Icon, Text, Left, Header, Title } from 'native-base';

const telephone = '+7(921)7414901';

const MapComponent = () => {
    return (
        <Container>
            <Header>
          <Body>
            <Title>
              Как нас найти?
          </Title>
          </Body>
        </Header>
            <Card>
                <CardItem cardBody>
                    <Image source={mapLocation} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>
                            Время работы: 10:00 - 18:00
                        </Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>
                            Адрес: ул. Пушкина, дом 20, корпус 1
                        </Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Text>Свяжитесь с нами:</Text>
                </CardItem>
                <CardItem footer>
                    <Icon name="ios-phone-portrait"></Icon>
                    <Text>{telephone}</Text>
                </CardItem>
                <CardItem footer>
                    <Icon type="Entypo" name="vk"></Icon>
                    <Text>https://vk.com/priut_rgevka</Text>
                    <Text></Text>
                </CardItem>
            </Card>
        </Container>
    );
}

export default MapComponent;