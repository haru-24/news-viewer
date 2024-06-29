import { FlatList, SafeAreaView, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import { ListItem } from "./components/ListItem"
import { useEffect, useState } from "react"
import { Article, NewsResponse } from "./types/types"
import axios from "axios"
import { NEWS_API_KEY } from "./env"

export default function App() {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchArticles = async () => {
    try {
      const response = await axios.get<NewsResponse>(
        `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${NEWS_API_KEY}`
      )
      if (response.data.articles) {
        setArticles(response.data.articles)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageURL={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
