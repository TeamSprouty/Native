import React from 'react';
import {Footer, FooterTab, Icon, Button } from 'native-base';

export default function MyFooter() {
    return (
    <Footer>
        <FooterTab>
          <Button active>
            <Icon active name="home" />
          </Button>
          <Button>
            <Icon name="chatbubbles" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button >
            <Icon name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
    </Footer>
    )
};