import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const google = require('../assets/Google.png')
export default function BoasVindas(){
    const dog = require('../assets/casual_dog.png')
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image source={dog} style={styles.imagem}></Image>

            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Ótimo dia</Text>
                <Text style={styles.subtitulo}>Como deseja acessar?</Text>

                <TouchableOpacity style={styles.botaoPrincipal} onPress={() => navigation.navigate('Acesse')}>
                <View style={styles.circuloIcone}>
                    <Image source={google} style={styles.google}></Image>
                </View>
                <Text style={styles.textoBotaoPrincipal}>Como deseja acessar?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSecundario}>
                    <Text style={styles.textoBotaoSecundario}>Outras opções</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  conteudo: {
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 24
  },
  botaoPrincipal: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#3cb371',
    borderRadius: 6,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  textoBotaoPrincipal: {
    color: '#fff',
    fontWeight: '600'
  },
  circuloIcone: {
    width: 24,
    height: 24,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  google: {
    width: 20,
    height: 20,
  },
  botaoSecundario: {
    backgroundColor: '#fff',
    borderColor: '#3cb371',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center'
  },
  textoBotaoSecundario: {
    fontWeight: '600'
  }
});
