import React from 'react';
import {List, ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base';

export default function Conversation() {
  return (
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: 'http://www.unh.edu/unhtales/wp-content/uploads/2016/05/unh-photo_5-450x465.jpg' }} />
        </Left>
        <Body>
          <Text>Kumar Pratik</Text>
          <Text note>Killaaa wher are my plantsss. .</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: 'http://www.unh.edu/unhtales/wp-content/uploads/2016/05/unh-photo_5-450x465.jpg' }} />
        </Left>
        <Body>
          <Text>Kumar Pratik</Text>
          <Text note>Killaaa wher are my plantsss. .</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: 'http://www.unh.edu/unhtales/wp-content/uploads/2016/05/unh-photo_5-450x465.jpg' }} />
        </Left>
        <Body>
          <Text>Kumar Pratik</Text>
          <Text note>Killaaa wher are my plantsss. .</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    </List>
  );
};