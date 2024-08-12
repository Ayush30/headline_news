/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashScreen';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux'
import Headlines from './src/screens/headlines';
import { PersistGate } from 'redux-persist/integration/react';
import WebViewModal from './src/components/webview';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}> 
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Headlines" component={Headlines} />
          <Stack.Screen name ="Webview" component={WebViewModal}/>
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
     </Provider>

  );
}

export default App;
