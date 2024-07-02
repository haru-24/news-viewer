import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "./screens/HomeScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ArticleScreen, ArticleStackParamList } from "./screens/ArticleScreen"

export default function App() {
  const Stack = createNativeStackNavigator()
  const ArticleStack = createNativeStackNavigator<ArticleStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <ArticleStack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
