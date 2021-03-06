import { useNavigation } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import { AuthContext } from '../../contexts/auth';

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

  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { user } = useContext(AuthContext);

  function login() {
    
  }

  return( 
    <Wrapper>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"  
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none" 
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={login}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => (
          navigation.navigate('SignUp')
        )}>
          <LinkText>Criar uma conta !</LinkText>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default SignIn;