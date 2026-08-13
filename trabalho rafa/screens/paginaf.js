import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const simon = require('../assets/simon.jpg');

export default function PaginaF() {
  return (
    <View style={styles.container}>
      <Image
        source={simon}
        style={styles.imagem}
        resizeMode="cover"
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  imagem: {
    width: '100%',
    height: '100%',
  },
});