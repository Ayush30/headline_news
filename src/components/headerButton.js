import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderButton = ({props}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Load More</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonWrapper:{
        height:50,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D4BCA2',
    },
    buttonText:{
        fontSize:16,
        color:'#1D190E'
    }
})

export default HeaderButton