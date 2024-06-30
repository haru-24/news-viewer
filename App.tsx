import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "./screens/HomeScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ArticleScreen } from "./screens/ArticleScreen"

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
