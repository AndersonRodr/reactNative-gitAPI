import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';
import {
    View
  } from 'react-native';

export default function Main(){
        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar Usuário"
                    />
                    <SubmitButton>
                        <Icon name="add" size={20} color="#FFF"/>
                    </SubmitButton>

                </Form>
            </Container>)
}

Main.navigationOptions = {
    title: 'Usuário'
  }