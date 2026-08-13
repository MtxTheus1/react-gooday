import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Email from '../components/Email.js';
import Senha from '../components/Senha.js';
import { useState } from 'react';
import { usuariosCadastrados } from '../Usuarios.js';
import { useNavigation } from '@react-navigation/native';

const google = require('../assets/Google.png');
const facebook = require('../assets/Facebook.png');

export default function Acesse() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [modalSucesso, setModalSucesso] = useState(false);
  const [modalErro, setModalErro] = useState(false);

  function Entrar() {

    console.log('botão Entrar clicado', email, senha);

    const userValido = usuariosCadastrados.find(
      (i) => i.email === email && i.senha === senha
    );

    if (userValido) {
      setModalSucesso(true);
    } else {
      setModalErro(true);
    }
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttonSetinha}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <Text style={styles.titulo}>
        Acesse
      </Text>

      <Text style={styles.subtitulo}>
        com E-mail e Senha
      </Text>

      <Email
        value={email}
        onChangeText={setEmail}
      />

      <Senha
        label="Senha"
        placeholder="Digite a sua senha"
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.deixarLinha}>

        <View style={styles.linhaEsqueciSenha}>
          <View style={styles.checkbox} />
          <Text style={styles.text}>
            Lembrar Senha
          </Text>
        </View>

        <Text style={styles.text}>
          Esqueci minha senha
        </Text>

      </View>

      <View style={styles.botoes}>

        <TouchableOpacity
          style={styles.botao1}
          onPress={Entrar}
        >
          <Text style={styles.textBotao1}>
            Acessar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textBotao2}>
            Cadastrar
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaDivisor}>

        <View style={styles.divisor} />

        <Text style={styles.textDivisor}>
          Ou continue com
        </Text>

        <View style={styles.divisor} />

      </View>

      <View style={styles.outroLogin}>

        <TouchableOpacity>
          <Image
            source={google}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={facebook}
            style={styles.logo}
          />
        </TouchableOpacity>

      </View>
      
      <Modal
        visible={modalSucesso}
        transparent={true}
        animationType="fade"
      >

        <View style={styles.modalFundo}>

          <View style={styles.modalCaixa}>

            <Ionicons
              name="checkmark-circle"
              size={65}
              color="#3cb371"
            />

            <Text style={styles.modalTitulo}>
              Login realizado!
            </Text>

            <Text style={styles.modalTexto}>
              E-mail e senha estão corretos.
            </Text>

            <TouchableOpacity
              style={styles.modalBotao}
              onPress={() => {
                setModalSucesso(false);
                navigation.navigate('PaginaF');
              }}
            >
              <Text style={styles.modalBotaoTexto}>
                Continuar
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

      <Modal
        visible={modalErro}
        transparent={true}
        animationType="fade"
      >

        <View style={styles.modalFundo}>

          <View style={styles.modalCaixa}>

            <Ionicons
              name="close-circle"
              size={65}
              color="#e74c3c"
            />

            <Text style={styles.modalTitulo}>
              Login incorreto
            </Text>

            <Text style={styles.modalTexto}>
              E-mail ou senha estão incorretos.
            </Text>

            <TouchableOpacity
              style={styles.modalBotaoErro}
              onPress={() => setModalErro(false)}
            >
              <Text style={styles.modalBotaoTexto}>
                Tentar novamente
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>


      <StatusBar style="auto" />

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60
  },

  buttonSetinha: {
    padding: 8,
    marginLeft: -8
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 14,
    marginBottom: 24,
  },

  deixarLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  linhaEsqueciSenha: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#3cb371',
    borderRadius: 3,
    marginRight: 8,
  },

  text: {
    fontSize: 12
  },

  botoes: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24
  },

  botao1: {
    flex: 1,
    backgroundColor: '#3cb371',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },

  textBotao1: {
    color: '#fff',
    fontWeight: '600'
  },

  botao2: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#3cb371',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },

  textBotao2: {
    fontWeight: '600'
  },

  areaDivisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },

  divisor: {
    flex: 1,
    height: 1,
    backgroundColor: '#303030'
  },

  textDivisor: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#303030'
  },

  outroLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },

  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCaixa: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },

  modalTexto: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  modalBotao: {
    width: '100%',
    backgroundColor: '#3cb371',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  modalBotaoErro: {
    width: '100%',
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  modalBotaoTexto: {
    color: '#fff',
    fontWeight: '600',
  },

});