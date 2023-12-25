import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ListItem } from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageURL="https://picsum.photos/200/300"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus, quae, voluptatum, quibusdam, voluptate quos accusantium quod quas voluptates inventore. Quisquam, voluptatibus voluptates. Quisquam, voluptatibus voluptates. Quisquam, voluptates voluptates."
        author="React News"
      />
      <ListItem
        imageURL="https://picsum.photos/200/600"
        title="こんにちは"
        author="aaa"
      />
      <ListItem
        imageURL="https://picsum.photos/200/400"
        title="こんばんは"
        author="bbb"
      />
      <ListItem
        imageURL="https://picsum.photos/200/100"
        title="おはようございます"
        author="xxx"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
