import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {splashBackground} from '../assets';
import {fetchHeadlines} from '../network/fetch-headlines';
import {setHeadlines} from '../redux/reducer/headline-reducer';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const persistConfigKey = 'root';

  const checkIfKeyExists = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        // Data exists for the given key
        return true;
      } else {
        // No data found for the key
        loadHeadlines();
      }
    } catch (error) {
      // Error retrieving data
      Alert.alert('There was some issue getting your headlines');
    }
  };

  const loadHeadlines = async () => {
    try {
      const response = await fetchHeadlines();
      dispatch(setHeadlines(response.articles));
    } catch (error) {
      Alert.alert(
        "You're offline, no worries we'll try to fetch your headlines locally",
      );
    }
  };

  useEffect(() => {
    checkIfKeyExists(persistConfigKey);

    const timeoutId = setTimeout(() => {
      navigation.replace('Headlines');
    }, 7000);

    return () => clearTimeout(timeoutId);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        blurRadius={15}
        style={{flex: 1}}
        source={splashBackground}>
        <StatusBar translucent backgroundColor="transparent" />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
