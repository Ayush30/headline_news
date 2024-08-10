import { View, Text, ImageBackground, StatusBar,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { splashBackground } from '../assets'
import { fetchHeadlines } from '../network/fetch-headlines'
import { setHeadlines } from '../redux/reducer/headline-reducer'
import { useDispatch } from 'react-redux'

const SplashScreen = ({navigation}) => {

  const dispatch=useDispatch()

  useEffect(()=>{

    const loadHeadlines = async () => {
      try {
        const response = await fetchHeadlines()
        dispatch(setHeadlines(response.articles))
      } catch (error) {
        console.error("Failed to fetch headlines:", error)
      }
    }

    loadHeadlines()

    const timeoutId=setTimeout(()=>{
      navigation.replace("Headlines")
    },7000)

    return () => clearTimeout(timeoutId)
  })

  return (
        <SafeAreaView style={{flex:1}}>
          <ImageBackground style={{flex:1}} source={splashBackground}>
            <StatusBar translucent backgroundColor="transparent" />

          </ImageBackground>
        </SafeAreaView>
  )
}

export default SplashScreen