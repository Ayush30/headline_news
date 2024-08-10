import { View, Text, ImageBackground, StatusBar,SafeAreaView } from 'react-native'
import React from 'react'
import { splashBackground } from '../assets'

const SplashScreen = ({navigation}) => {
  return (
        <SafeAreaView style={{flex:1}}>
          <ImageBackground style={{flex:1}} source={splashBackground}>
            <StatusBar translucent backgroundColor="transparent" />
            
          </ImageBackground>
        </SafeAreaView>
  )
}

export default SplashScreen