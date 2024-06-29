import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { ListItem } from "./components/ListItem"
import articles from "./dummies/articles.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {articles.map((article, index) => (
          <ListItem
            key={index.toString()}
            imageURL={article.urlToImage}
            title={article.title}
            author={article.author}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
