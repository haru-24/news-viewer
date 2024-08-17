import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { Article } from "../types/types";
import WebView from "react-native-webview";
import { ClipButton } from "../components/ClipButton";
import { addClip, deleteClip } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
export type ArticleStackParamList = {
  Home: undefined;
  Article: { article: Article };
};

type ProfileScreenRouteProp = RouteProp<ArticleStackParamList, "Article">;

export function ArticleScreen({ route }: { route?: ProfileScreenRouteProp }) {
  if (!route) throw new Error("Route prop is required");
  const { article } = route.params;
  const dispatch = useAppDispatch();
  const clips = useAppSelector((state) => state.user.clips);
  const isClipped = clips.some((clip) => clip.url === article.url);

  const onPressClip = () => {
    if (isClipped) {
      dispatch(deleteClip(article));
    } else {
      dispatch(addClip(article));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={onPressClip} enabled={isClipped} />
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
