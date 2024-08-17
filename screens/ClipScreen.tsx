import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useAppSelector } from "../store/hooks";
import { ListItem } from "../components/ListItem";
import { Article } from "../types/types";
import { NavigationProp } from "@react-navigation/native";

export function ClipScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const clips = useAppSelector((state) => state.user.clips);
  const onPressAeticle = (article: Article) => {
    navigation.navigate("Article", { article: article });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            imageURL={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => onPressAeticle(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
