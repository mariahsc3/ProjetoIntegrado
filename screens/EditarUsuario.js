import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function EditarUsuario({navigation}) {

  function mostra(){
    navigation.navigate("Usuario")
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>App</Text>
        <Text style={styles.text}>Editar usuario:</Text>
        <Text style={styles.text}>Nome do usuario</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>Mariah Sonnberger Chamlet</TextInput>
        </View>
        <Text style={styles.text}>E-mail</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>mariahsc3@gmail.com</TextInput>
        </View>
        <Text style={styles.text}>Senha</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>********</TextInput>
        </View>
        <Text style={styles.text}>Loja</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>Loja 3</TextInput>
        </View>
        <View style={styles.cardb}>
            <TouchableOpacity style={styles.botao} onPress={mostra}>
                <Text style={styles.textb}>Salvar</Text>
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
    marginHorizontal: 40,
    color: '#BFBFBF',
    fontSize: 30,
  },
  footer: {
    color: '#8AA6A3',
    fontSize: 20,
    marginTop: 160,
    marginHorizontal: 130,
  },
  campo: {
    backgroundColor: '#8AA6A3',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 0,
    borderRadius: 10,
},
text: {
    marginLeft: 60,
    marginBottom: 5,
    marginTop: 10,
    color: '#BFBFBF',
    fontSize: 20,
},
card: {
  backgroundColor: '#8AA6A3',
  padding: 2,
  marginBottom: 10,
  marginHorizontal: 50,
  borderRadius: 10,
},
cardb: {
  backgroundColor: '#8AA6A3',
  alignItems: 'center',
  padding: 10,
  marginTop: 20,
  marginBottom: 10,
  marginHorizontal: 150,
  borderRadius: 10,
},
textb: {
  fontSize: 20,
}
});