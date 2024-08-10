import { View, Text,SafeAreaView,StatusBar, Platform, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { store } from '../redux/store'
import Flatlistcard from '../components/flatlistcard'
import HeaderButton from '../components/headerButton'

const Headlines = () => {
  

  const data=useSelector((store)=>store.headline.data)
  const [visibleData, setVisibleData] = useState([]);
  console.log("GetData",data)

  const loadMore=()=>{
    setVisibleData((prevData) => {
      const currentLength = prevData.length;
      const nextLength = currentLength + 5;
      const newItems = data.slice(currentLength, nextLength);
      return [...newItems, ...prevData];
    });
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setVisibleData(data.slice(0, 10));
    }

    const interval = setInterval(() => {
      loadMore()
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={'dark-content'} translucent  backgroundColor="transparent" />

        <View style={{flex:1,marginTop:Platform.OS=='android'?StatusBar.currentHeight:'',backgroundColor:'#D4BCA2'}}>
          <FlatList
            data={visibleData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item,index }) => (<Flatlistcard item={item}/>)}
            showsVerticalScrollIndicator={false}
          />
          <HeaderButton onPress={loadMore} style={{position:'absolute',bottom:0}}></HeaderButton>
        </View>
    </SafeAreaView>
  )
}

export default Headlines