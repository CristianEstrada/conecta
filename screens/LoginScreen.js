import { Button,View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'


const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <View>
      <Text>Inicio de Sesion</Text>
      <Button title='Login' onPress={signInWithGoogle} />
    </View>
  )
}

export default LoginScreen