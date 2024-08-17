import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { Article } from "../types/types";
import WebView from "react-native-webview";
export type ArticleStackParamList = {
  Home: undefined;
  Article: { article: Article };
};

type ProfileScreenRouteProp = RouteProp<ArticleStackParamList, "Article">;

export function ArticleScreen({ route }: { route?: ProfileScreenRouteProp }) {
  if (!route) throw new Error("Route prop is required");
  const { article } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
