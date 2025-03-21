import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
const driver = () => {
  return (
 
    <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',backgroundColor: '#000', height:86 }}>
        <MaterialIcons name='arrow-back' color={'#fff'} size={30} margin={15} />
      <Text style= {{textAlign:'center', padding:30 ,color: '#fff', fontSize:22, margin:-30}}>Cadastro de um Motorista</Text>
      <Text>Vamos Realizar Seu Cadastro</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({

    
})
export default driver