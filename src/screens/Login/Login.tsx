import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
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

import { Input } from '.././../components/Input/Input';

const Login: React.FC = () => {
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView >
            <Container>

                <ContentHeader>
                    <Title>Titulo {"\n"} Login</Title>

                    <Description>Entrar</Description>

                    <ViewButton>
                        <ButtonSocialGoogle tittle='Google' />
                        <ButtonSocial tittle='FaceBook' backGroundColor={COLORS.COLORS.BLUE} iconName='facebook' iconColor='white' />
                    </ViewButton>
                    <ViewButton>
                        <ButtonSocial tittle='GitHub' backGroundColor={COLORS.COLORS.GREEN2} iconName='github' iconColor='white' />
                        <ButtonSocial tittle='Twitter' backGroundColor={COLORS.COLORS.BLUE3} iconName='twitter' iconColor='white' />
                    </ViewButton>
                    <ViewButton>
                        <ButtonSocial tittle='Instagram' backGroundColor={COLORS.COLORS.PINK} iconName='instagram' iconColor='white' />
                        <ButtonSocial tittle='Apple' backGroundColor={COLORS.COLORS.GRAY1} iconName='apple' iconColor='white' />
                    </ViewButton>
                </ContentHeader>

                <ContentBody >
                    <Input />
                </ContentBody>

                <ContentBody  >
                <TextInput
                placeholder="enter your message here"
                value={message}
                onChangeText={(text) => setMessage(text)}
                onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />

                <Text style={styles.title}>GeeksforGeeks</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                keyboardType="visible-password"
                secureTextEntry
                style={styles.input}
                onSubmitEditing={() => alert("Welcome to GeeksforGeeks")}
            />
                </ContentBody>

                <ContentFooter>

                </ContentFooter>

                {/* <Text>Login</Text> */}
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#228B22",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        color: "#fff",
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        marginTop: 15,
        color: "#000",
    },
});
export { Login };
