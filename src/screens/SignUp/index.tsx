import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { 
  Wrapper, 
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';

const SignUp: React.FC = () => {

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { signUp } = useContext(AuthContext);
  
  function handleSignUp() {
    signUp(email, password, nome)
  }

  return( 
    <Wrapper>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <AreaInput>
          <Input 
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"  
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>
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

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
        
      </Container>
    </Wrapper>
  );
}

export default SignUp;