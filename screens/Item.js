import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { CommonActions } from '@react-navigation/native';

export default function Item({navigation}) {

  function passa(){
    navigation.navigate("EditarItem")
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>App</Text>
        <Text style={styles.sub}>Item 1</Text>
        <Text style={styles.info}>Informações do item:</Text>
            <View style={styles.card}>
                <Text style={styles.text}>código: 123456</Text>
                <Text style={styles.text}>descrição: copo de plastico de 500ml, transparente, com canudo</Text>
                <Text style={styles.text}>preço: R$20,00</Text>
                <Text style={styles.text}>quantidade: 234</Text>
                <Text style={styles.text}>total: R$4.680,00</Text>
            </View>
        <View style={styles.button}>
            <TouchableOpacity style={styles.botao} onPress={passa}>
                <Text style={styles.textb}>Editar</Text>
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
  footer: {
    color: '#8AA6A3',
    fontSize: 20,
    marginTop: 280,
    marginHorizontal: 130,
  },
  card: {
    backgroundColor: '#8AA6A3',
    marginHorizontal: 30,
    marginTop: 10,
    paddingVertical: 20,
    borderRadius: 10,
},
text: {
    marginLeft: 30,
    marginBottom: 5,
    color: '#10403B',
    fontSize: 20,
},
sub: {
    marginLeft: 30,
    marginBottom: 20,
    color: '#BFBFBF',
    fontSize: 30,
},
info: {
    marginLeft: 40,
    marginTop: 5,
    color: '#BFBFBF',
    fontSize: 20,
},
icon: {
    marginTop: 10,
    marginLeft: 310,
},
button: {
    backgroundColor: '#8AA6A3',
    alignItems: 'center',
    padding: 7,
    marginTop: 20,
    marginLeft: 150,
    marginRight: 150,
    borderRadius: 10,
  },
  textb: {
    fontSize: 20,
  }
});
