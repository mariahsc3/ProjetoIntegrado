import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { CommonActions } from '@react-navigation/native';

export default function Lojas({navigation}) {

    function passa(){
      navigation.navigate("EditarLoja")
      }
    function loj(){
    navigation.navigate("NovaLoja")
    }
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar style="auto" />
          <Text style={styles.title}>App</Text>
            <View style={styles.button2}>
                <TouchableOpacity style={styles.botao} onPress={loj}>
                    <Text style={styles.textb1}>+ Nova Loja</Text>
                </TouchableOpacity>
            </View>
          <Text style={styles.sub}>Lojas</Text>
          <View style={styles.button}>
              <TouchableOpacity style={styles.botao} onPress={passa}>
                  <Text style={styles.textb}>Loja 1</Text>
                  <Feather style={styles.icon} name='edit-3' size={24} color='#10403B'/>
              </TouchableOpacity>
          </View>
          <View style={styles.button}>
              <TouchableOpacity style={styles.botao} onPress={passa}>
                  <Text style={styles.textb}>Loja 2</Text>
                  <Feather style={styles.icon} name='edit-3' size={24} color='#10403B'/>
              </TouchableOpacity>
          </View>
          <View style={styles.button}>
              <TouchableOpacity style={styles.botao} onPress={passa}>
                  <Text style={styles.textb}>Loja 3</Text>
                  <Feather style={styles.icon} name='edit-3' size={24} color='#10403B'/>
              </TouchableOpacity>
          </View>
          <View style={styles.button}>
              <TouchableOpacity style={styles.botao} onPress={passa}>
                  <Text style={styles.textb}>Loja 4</Text>
                  <Feather style={styles.icon} name='edit-3' size={24} color='#10403B'/>
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
      marginTop: 170,
      marginHorizontal: 130,
    },
    sub: {
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 20,
        color: '#BFBFBF',
        fontSize: 30,
    },
    icon: {
        marginBottom: 10,
        marginLeft: 350,
    },
    button: {
        backgroundColor: '#8AA6A3',
        padding: 7,
        borderWidth: 1.5,
        borderColor: '#10403B',
    },
    textb: {
        fontSize: 30,
    },
    button2: {
        backgroundColor: '#8AA6A3',
        padding: 7,
        marginHorizontal: 100,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#10403B',
    },
    textb1: {
        fontSize: 20,
        textAlign: 'center',
    },
  });