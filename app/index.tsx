import { View, Text, Image, Button,StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={ styles.View}>
    
      <Text style = {styles.Text} >Como você quer usar o app </Text>
      <Text >Olá sou o Motorista</Text>
      <Image style={styles.Image} source={ require('../assets/driver.png')} />
     
      <Text ><Button title='Motorista'></Button></Text>

      <Text >Olá sou o Carona </Text>
      <Image style={{width:150,height:150,alignSelf:'center',justifyContent:'center'}} source={ require('../assets/Passager.png')} />
      
      <Text ><Button title='Carona' ><h1>Carona</h1></Button></Text>
     

    </View>
  )
}
const styles = StyleSheet.create({

  Text:{
    position:'relative', fontSize: 34,
     fontWeight:500 , 
      paddingHorizontal: 60,
      marginBottom: 60
  },
Image:{
  width:150,height:150,alignSelf:'center',justifyContent:'center'
},
View:{
flex: 1, alignItems:'center',justifyContent:'center'

},

})


export default index