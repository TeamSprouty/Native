import React from 'react';
import { Icon, Button, Card, CardItem, Left, Body, Text } from 'native-base';

const MyCard = ({height= 200, width=200}) => (
    <Card style={{height: height, width: width}}>
      <CardItem>
        <Left>
          <Body>
            <Text>NativeBase</Text>
            <Text note>GeekyAnts</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
);