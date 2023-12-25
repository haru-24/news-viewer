import { StyleSheet, View, Image, Text } from "react-native";

export const ListItem = () => {
  const sampleText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus, quae, voluptatum, quibusdam, voluptate quos accusantium quod quas voluptates inventore. Quisquam, voluptatibus voluptates. Quisquam, voluptatibus voluptates. Quisquam, voluptates voluptates.";
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://picsum.photos/200/300" }}
        ></Image>
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {sampleText}
        </Text>
        <Text style={styles.subText}>React News</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
