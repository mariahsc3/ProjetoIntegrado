import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function NovaLoja({navigation}) {

  function salva(){
    navigation.navigate("Lojas")
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>App</Text>
        <Text style={styles.sub}>Adicionar nova loja:</Text>
        <Text style={styles.text}>Nome da loja</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>ex: Loja 1</TextInput>
        </View>
        <Text style={styles.text}>CNPJ</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>xx.xxx.xxx/0001-xx</TextInput>
        </View>
        <Text style={styles.text}>Endereço</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>ex: Rua Abacate, 24</TextInput>
        </View>
        <Text style={styles.text}>Cidade</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>ex: Londrina</TextInput>
        </View>
        <Text style={styles.text}>UF</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>ex: PR</TextInput>
        </View>
        <Text style={styles.text}>Telefone</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>(xx)x xxxx-xxxx</TextInput>
        </View>
        <Text style={styles.text}>Gerente</Text>
        <View style={styles.card}>
            <TextInput style={styles.campo}>ex: Thiago Elias</TextInput>
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
        marginTop: 10,
        marginHorizontal: 130,
    },
    campo: {
        backgroundColor: '#8AA6A3',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        marginLeft: 60,
        marginBottom: 5,
        marginTop: 7,
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
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 150,
        borderRadius: 10,
    },
    textb: {
        fontSize: 20,
    }
});