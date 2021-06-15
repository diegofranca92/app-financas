import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { 
  Wrapper, 
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

const SignIn: React.FC = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return( 
    <Wrapper>
      <Container>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCaptaliz="none"  
            value={email}
            onChangeText={(text) => {setEmail(text)}}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCaptaliz="none" 
            value={password}
            onChangeText={(text) => {setPassword(text)}}
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link>
          <LinkText>Criar uma conta !</LinkText>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default SignIn;