import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
