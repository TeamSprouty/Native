import React from 'react';
import { Text, Button} from 'native-base';

export default function NiceButton ({ history, color, text, link, addEmail, email }) {
    return (<Button block light
        style={{ margin: 20, backgroundColor: color }}
        onPress={() => {
            addEmail(email);
            history.push(link);
        }}
    >
        <Text style={{ color: '#FCFCFC' }}>{text}</Text>
    </Button>);
};