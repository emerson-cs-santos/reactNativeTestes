import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from "react-native-responsive-fontsize";

import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: ${RFValue(10)}px;
    background-color: ${ ( { theme } ) => theme.COLORS.GRAY6 };
    margin-left: ${RFValue(5)}px;
`;

export const IconeGoogle = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
`;

export const IconGoogle = styled(Fontisto)`
    font-size: ${RFValue(30)}px;
`;


export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-left: ${RFValue(10)}px;
    font-family: ${ ( { theme } ) => theme.FONTS.POPPINSLIGHT };
`;


