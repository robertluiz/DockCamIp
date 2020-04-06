import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  return (
  <Container >
    <Form>
      <Input 
          autoCorrect = {false}
          autoCapitalize = 'none'
          placeholder = 'Host' 
      />
      <SubmitButton>
        <Icon  name="add" color="#fff" size={20} />
      </SubmitButton>
    </Form>
  </Container>
  );
}


Main.Options ={
  title: 'Teste',
};