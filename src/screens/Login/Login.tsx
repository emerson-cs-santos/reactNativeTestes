import React from 'react'
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

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Titulo {"\n"} Login</Title>

                    <Description>Entrar</Description>

                    <ViewButton>

                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>



                <Text>Login</Text>
            </Container>
        </SafeAreaView>
    )
}

export { Login };
