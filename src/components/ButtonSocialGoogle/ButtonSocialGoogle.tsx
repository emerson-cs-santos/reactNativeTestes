import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler'
import { Button, IconeGoogle, Title, IconGoogle } from './styles';
import { PngGoogle } from '../../assets/google.png';

interface Props extends RectButtonProps {
    tittle: string
}

const ButtonSocialGoogle: React.FC<Props> = ( { tittle, ... rest } ) => {
    return (
        <Button { ... rest }>
            {/* <IconeGoogle source={PngGoogle} resizeMode="contain"/> */}
            <IconGoogle name="google" color="black"/>
            <Title>{tittle}</Title>
        </Button>
    );
}

export { ButtonSocialGoogle };
