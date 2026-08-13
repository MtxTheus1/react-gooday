import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logo = require('../assets/logotipo.png');

export default function Gooday() {

  const navigation = useNavigation();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.replace('BoasVindas');
    }, 3000);

    return () => clearTimeout(timer);

  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3cb371',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain'
  }

});