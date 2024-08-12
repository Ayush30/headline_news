import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import React from 'react';

const Flatlistcard = ({item,navigation}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={{fontWeight: 800, marginVertical: 10}}>
        {item.title}
      </Text>
      <Text numberOfLines={5} style={{marginVertical: 10}}>
        {item.description}
      </Text>
      <Text
        style={{alignSelf: 'center', fontSize: 24}}
        onPress={() => {
          navigation.navigate('Webview',{url:item.url})
        }}>
        {' '}
        Click here to read full...{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    with: '100%',
    height: 200,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

export default React.memo(Flatlistcard);
