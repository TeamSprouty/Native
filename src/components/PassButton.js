import React from 'react';
import { Text, Button} from 'native-base';

export default function PassButton ({ history, color, text, link, authUser, user }) {
    return (<Button block light
        style={{ margin: 20, backgroundColor: color }}
        onPress={() => {
            authUser(user);
            history.push(link);
        }}
    >
        <Text style={{ color: '#FCFCFC' }}>{text}</Text>
    </Button>);
};