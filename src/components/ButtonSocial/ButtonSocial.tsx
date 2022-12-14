import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'
import { Fontisto } from "@expo/vector-icons";
import { Button, Title, Icon } from './styles';

interface Props extends RectButtonProps {
    tittle?: string
    backGroundColor: string
    iconName: React.ComponentProps<typeof Fontisto>["name"]
    iconColor: React.ComponentProps<typeof Fontisto>["color"]
}

const ButtonSocial: React.FC<Props> = ( { tittle, backGroundColor, iconName, iconColor, ... rest } ) => {
    return (
        <Button style={ { backgroundColor: backGroundColor } } { ... rest }>
            <Icon name={iconName} color={iconColor}/>
            <Title>{tittle}</Title>
        </Button>
    );
}

export { ButtonSocial };
