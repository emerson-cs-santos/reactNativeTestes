import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton
} from './styles'

import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocial } from '../../components/ButtonSocial/ButtonSocial';

import COLORS from '../../styles/theme';

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Titulo {"\n"} Login</Title>

                    <Description>Entrar</Description>

                    <ViewButton>
                        <ButtonSocialGoogle tittle='Google'/>
                        <ButtonSocial tittle='FaceBook' backGroundColor={COLORS.COLORS.BLUE} iconName='facebook' iconColor='white'/>
                    </ViewButton>
                    <ViewButton>
                        <ButtonSocial tittle='GitHub' backGroundColor={COLORS.COLORS.GREEN2}  iconName='github' iconColor='white'/>
                        <ButtonSocial tittle='Twitter' backGroundColor={COLORS.COLORS.BLUE3}  iconName='twitter' iconColor='white'/>
                    </ViewButton>
                    <ViewButton>
                        <ButtonSocial tittle='Instagram' backGroundColor={COLORS.COLORS.PINK}  iconName='instagram' iconColor='white'/>
                        <ButtonSocial tittle='Apple' backGroundColor={COLORS.COLORS.GRAY1}  iconName='apple' iconColor='white'/>
                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>



                {/* <Text>Login</Text> */}
            </Container>
        </SafeAreaView>
    )
}

export { Login };
