import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function EditarItem({navigation}) {

  function salva(){
    navigation.navigate("Itens")
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>App</Text>
        <Text style={styles.sub}>Editar item:</Text>
        <Text style={styles.text}>Nome do item</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>Copo 500ml</TextInput>
        </View>
        <Text style={styles.text}>Descrição</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>Copo de plastico de 500ml, transparente, com canudo</TextInput>
        </View>
        <Text style={styles.text}>Preço</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>R$20,00</TextInput>
        </View>
        <View style={styles.cardb}>
            <TouchableOpacity style={styles.botao} onPress={salva}>
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
    sub: {
        marginHorizontal: 40,
        marginBottom: 10,
        color: '#BFBFBF',
        fontSize: 25,
    },
    footer: {
        color: '#8AA6A3',
        fontSize: 20,
        marginTop: 250,
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