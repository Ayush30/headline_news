import { View, Text,SafeAreaView,StatusBar, Platform, FlatList } from 'react-native'
import React from 'react'

const Headlines = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,marginTop:Platform.OS=='android'?StatusBar.currentHeight:''}}>
        <StatusBar barStyle={'dark-content'} translucent  backgroundColor="transparent" />
        <FlatList>

        </FlatList>
      </View>
    </SafeAreaView>
  )
}

export default Headlines