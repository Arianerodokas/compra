import React from 'react';
import { StyleSheet, View } from 'react-native';

import Topo from './components/Topo';
import Detalhe from './components/Detalhe';


export default function Carrinho() {
    return <>
    <Topo/>
    <View style={estilos.carrinho}>
    <Detalhe/>
    </View>
    </> 
}

const estilos = StyleSheet.create({
  
     carrinho:{
    paddingVertical: 8,
    padidingHorizontal:16

     }
})