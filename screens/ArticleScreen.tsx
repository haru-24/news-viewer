import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { Article } from "../types/types";
import WebView from "react-native-webview";
import { ClipButton } from "../components/ClipButton";
import { useDispatch } from "react-redux";
import { addClip } from "../store/userSlice";
export type ArticleStackParamList = {
  Home: undefined;
  Article: { article: Article };
};

type ProfileScreenRouteProp = RouteProp<ArticleStackParamList, "Article">;

export function ArticleScreen({ route }: { route?: ProfileScreenRouteProp }) {
  if (!route) throw new Error("Route prop is required");
  const { article } = route.params;
  const dispatch = useDispatch();

  const onPressClip = () => {
    dispatch(addClip(article));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={onPressClip} enabled={false} />
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
