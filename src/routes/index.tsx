import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginCamera } from '../pages/login-camera';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: 'transparent' }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: false, statusBarColor: '#000' }}>
          <Stack.Screen name="login-steps" component={LoginCamera} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export { Routes }