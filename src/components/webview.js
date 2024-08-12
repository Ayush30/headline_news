import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const WebViewModal = ({route}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <WebView source={{ uri: route.params.url }} style={{ flex: 1 }} />
    </SafeAreaView>
  )
}

export default WebViewModal