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
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { usuariosCadastrados } from '../Usuarios.js';

const google = require('../assets/Google.png');
const facebook = require('../assets/Facebook.png');

export default function CadastraSe() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalErro, setModalErro] = useState(false);

  function salvarCadastro() {

    if (senha === '' || confirmarSenha === '') {
      setModalErro(true);
      return;
    }

    if (senha !== confirmarSenha) {
      setModalErro(true);
      return;
    }

    usuariosCadastrados.push({
      email,
      senha
    });

    setModalVisivel(true);
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
        Cadastra-se
      </Text>

      <Text style={styles.subtitulo}>
        Informe seu E-mail e crie uma senha
      </Text>

      <Email
        value={email}
        onChangeText={setEmail}
      />

      <Senha
        label="Crie uma Senha"
        placeholder="Digite a sua senha"
        value={senha}
        onChangeText={setSenha}
      />

      <Senha
        label="Repita a senha"
        placeholder="Digite novamente a sua senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <View style={styles.botoes}>

        <TouchableOpacity
          style={styles.botao1}
          onPress={salvarCadastro}
        >
          <Text style={styles.textBotao1}>
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
        visible={modalVisivel}
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
              Cadastro realizado!
            </Text>

            <Text style={styles.modalTexto}>
              Sua conta foi criada com sucesso.
            </Text>

            <TouchableOpacity
              style={styles.modalBotao}
              onPress={() => {
                setModalVisivel(false);
                navigation.navigate('Acesse');
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
              color="red"
            />

            <Text style={styles.modalTitulo}>
              Senhas diferentes
            </Text>

            <Text style={styles.modalTexto}>
              As duas senhas precisam ser iguais.
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