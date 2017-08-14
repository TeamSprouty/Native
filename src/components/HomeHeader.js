import React from 'react';
import { Icon, Item, Input, Button, Left, Text } from 'native-base';
import { Row, Grid } from "react-native-easy-grid";

export default function HomeNavigation() {
    return (
        <Grid>
            <Row>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
              </Item>
            </Row>
            <Row style={{justifyContent: 'space-around'}}>
              <Button style={{height: 30}}>
                <Text>Type</Text>
              </Button>
              <Button style={{height: 30}}>
                <Text>Color</Text>
              </Button>
              <Button style={{height: 30}}>
                <Text>Size</Text>
              </Button>
              <Button style={{height: 30}}>
                <Text>Plant</Text>
              </Button>
            </Row>
        </Grid>
    );
}