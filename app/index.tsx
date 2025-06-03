// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContentBox from './components/mainContentBox';
import Start from './content/start';
import Kontakt from './content/kontakt';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainContentBox} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Contact" component={Kontakt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
