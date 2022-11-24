import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function Login({navigation}) {

  function passa(){
    navigation.reset({
        index: 0,
        routes: [{name:"Itens"}]
    })
    }
  function log(){
    navigation.navigate("Login")
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>App</Text>
        <Text style={styles.text}>Login</Text>
          <View style={styles.card}>
            <TextInput style={styles.campo}>E-mail</TextInput>
            <TextInput style={styles.campo}>Senha</TextInput>
            <View style={styles.button}>
              <TouchableOpacity style={styles.botao} onPress={passa}>
                  <Text style={styles.textb}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        <Text style={styles.text}>Cadastro</Text>
        <TextInput style={styles.campo}>Nome</TextInput>
        <TextInput style={styles.campo}>E-mail</TextInput>
        <TextInput style={styles.campo}>Código da Loja</TextInput>
        <TextInput style={styles.campo}>Senha</TextInput>
        <View style={styles.button}>
              <TouchableOpacity style={styles.botao} onPress={log}>
                  <Text style={styles.textb}>Cadastrar</Text>
              </TouchableOpacity>
        </View>
        <Text style={styles.footer}>©Mariah S. Chamlet</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10403B',
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: {
    marginHorizontal: 171,
    color: '#BFBFBF',
    fontSize: 50,
  },
  text: {
    marginHorizontal: 80,
    marginBottom: 10,
    color: '#BFBFBF',
    fontSize: 20,
  },
  footer: {
    color: '#8AA6A3',
    fontSize: 20,
    marginHorizontal: 130,
  },
  campo: {
    backgroundColor: '#8AA6A3',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 50,
    borderRadius: 20,
},
button: {
  backgroundColor: '#8AA6A3',
  alignItems: 'center',
  padding: 7,
  marginTop: 20,
  marginBottom: 80,
  marginLeft: 150,
  marginRight: 150,
  borderRadius: 10,
},
textb: {
  fontSize: 20,
}
});