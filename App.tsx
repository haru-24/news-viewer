import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleScreen } from "./screens/ArticleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClipScreen } from "./screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const renderTabBarIcon = (route: RouteProp<ParamListBase, string>, color: string, size: number) => {
  let iconName;

  if (route.name === "HomeTab") {
    return <FontAwesome name="home" size={size} color={color} />;
  } else if (route.name === "ClipTab") {
    return <FontAwesome name="bookmark" size={size} color={color} />;
  }
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => renderTabBarIcon(route, color, size),
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, title: "Home" }} />
        <Tab.Screen name="ClipTab" component={ClipScreen} options={{ title: "Clip" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
