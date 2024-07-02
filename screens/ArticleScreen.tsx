import React from "react"
import { Text, SafeAreaView } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { Article } from "../types/types"
export type ArticleStackParamList = {
  Home: undefined
  Article: { article: Article }
}

type ProfileScreenRouteProp = RouteProp<ArticleStackParamList, "Article">

export function ArticleScreen({ route }: { route: ProfileScreenRouteProp }) {
  const { article } = route.params

  return (
    <SafeAreaView>
      <Text>{article.title}</Text>
      <Text>{article.author}</Text>
      <Text>{article.url}</Text>
    </SafeAreaView>
  )
}
