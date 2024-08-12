import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import React from 'react';

const Flatlistcard = ({item,navigation}) => {
  if (item.title=="[Removed]") {
    return null;
  }
  return (
      <View style={styles.container}>
      <Image resizeMode='cover'  style={{flex:5,overflow: 'hidden',borderRadius:12}} source={{uri:item.urlToImage?item.urlToImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnews-png&psig=AOvVaw3bVAzZo2Zi-L9bYqcbnYBC&ust=1723540549178000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiz3YKP74cDFQAAAAAdAAAAABAE"}}/>
      <Text numberOfLines={2} style={styles.headlineTxt}>
        {item.title}
      </Text>
      <Text
        style={styles.linkTxt}
        onPress={() => {
          navigation.navigate('Webview',{url:item.url})
        }}>
        Click here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    with: '100%',
    height: 200,
    backgroundColor: '#FFFFFF',
    margin: 5,
    borderBottomColor: 'white',
    borderRadius:12
  },
  headlineTxt:{flex:2, marginVertical: 10,color:'black',fontSize:18,alignSelf:'center'},
  linkTxt:{flex:1,alignSelf: 'center', fontSize: 24,marginTop:'auto',elevation:5,color:'black'}
});

export default React.memo(Flatlistcard);
