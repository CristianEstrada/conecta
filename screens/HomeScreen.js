import { Button, View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Pagina principal</Text>
      <Button title="Ir al Chat" onPress={() => navigation.navigate('Chat')}/>
    </View>
  )
}

export default HomeScreen;