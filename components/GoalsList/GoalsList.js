import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const GoalsList = ({ goals, handleDeleteGoal }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={goals}
        style={styles.container}
        renderItem={(itemData) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleDeleteGoal(itemData.item)}
              style={styles.goalItem}
              key={Math.random().toString()}
            >
              <Text style={styles.goalItemText}>
                {itemData.index + 1}) {itemData.item}
              </Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    padding: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  goalItemText: {
    fontSize: 18,
    color: "white",
  },
  goalsContainer: {
    display: "flex",
  },
});
