import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../redux/store';
import Flatlistcard from '../components/flatlistcard';
import HeaderButton from '../components/headerButton';
import { fetchHeadlines } from '../network/fetch-headlines';
import {setHeadlines} from '../redux/reducer/headline-reducer';

const Headlines = ({navigation}) => {
  const data = useSelector(store => store.headline.data);
  const [visibleData, setVisibleData] = useState([]);
  
  const dispatch=useDispatch()

  const loadMore = () => {
    setVisibleData(prevData => {
      const currentLength = prevData.length;
      const nextLength = currentLength + 5;
      const newItems = data.slice(currentLength, nextLength);
      return [...newItems, ...prevData];
    });
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setVisibleData(data.slice(0, 10));
    }
    const loadHeadlines = async (pageSize) => {
      try {
        const response = await fetchHeadlines(pageSize);
        dispatch(setHeadlines(response.articles));
      } catch (error) {
        Alert.alert(
          "You're offline, no worries we'll try to fetch your headlines locally",
        );
      }
    };

    if(visibleData.length==100){
      loadHeadlines(visibleData.length+100)
    }

    const interval = setInterval(() => {
      loadMore();
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />

      <View
        style={{
          flex: 1,
          marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : '',
          backgroundColor: '#1A1A2E',
        }}>
        <FlatList
          data={visibleData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <Flatlistcard item={item} navigation={navigation} />}
          showsVerticalScrollIndicator={false}
        />
        <HeaderButton
          onPress={loadMore}
          style={{position: 'absolute', bottom: 0}}></HeaderButton>
      </View>
    </SafeAreaView>
  );
};

export default Headlines;
