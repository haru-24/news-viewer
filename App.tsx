import { StyleSheet, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { ListItem } from "./components/ListItem"
import articles from "./dummies/articles.json"

export default function App() {
  const items = articles.map((article,index) => {
    return (
      <ListItem
        key={index.toString()}
        imageURL={article.urlToImage}
        title={article.title}
        author={article.author}
      />
    )
  })
  return (
    <View style={styles.container}>
      {items}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
