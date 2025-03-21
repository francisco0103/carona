import { View, Text, Image,Button } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
            <Image  />
    
      <Text style={{alignSelf:'center',justifyContent:'center'}}><h1 >Como você quer usar o app </h1></Text>
      <Text style={{alignSelf:'center',justifyContent:'center'}}>Olá sou o Motorista</Text>
      <Image style={{width:150,height:150,alignSelf:'center',justifyContent:'center'}} source={ require('../assets/driver.png')} />
     
      <Text style={{alignSelf:'center',justifyContent:'center'}}><h1><Button title='Motorista'>Motorista</Button></h1></Text>

      <Text style={{alignSelf:'center',justifyContent:'center'}}>Olá sou o Carona </Text>
      <Image style={{width:150,height:150,alignSelf:'center',justifyContent:'center'}} source={ require('../assets/Passager.png')} />
      
      <Text style={{alignSelf:'center',justifyContent:'center'}}><h1><Button title='Motorista'>Carona</Button></h1></Text>
     

    </View>
  )
}


export default index