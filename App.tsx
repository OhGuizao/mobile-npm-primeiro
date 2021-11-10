import { StatusBar } from 'expo-status-bar';
import { estilo } from './css/Estilo';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={estilo.cabecalho}>
        <Text style={estilo.titulo}>Cafeteria</Text>
      </View>

      <View>
        <Image source={{ uri: 'https://c1.wallpaperflare.com/preview/776/180/874/coffee-shop-indoors-cafe-restaurant.jpg' }} style={estilo.painel}/>
      </View>



      <View style={estilo.elmenu}>
        <View>
          <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={estilo.menu}/>
        </View>
        <View>
          <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={estilo.menu}/>
        </View>
        <View>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWgHNGG8oFhBh6ksx9MfSrkGgpLKxAalexA&usqp=CAU' }} style={estilo.menu}/>
        </View>
        <View>
          <Image source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-hamburguer-gourmet.jpg' }} style={estilo.menu}/>
        </View>
      </View>

    </View>
      );
}

