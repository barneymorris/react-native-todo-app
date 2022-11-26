import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const AddButton = ({ handleAddGoal }) => {
  return (
    <TouchableOpacity
      onPress={handleAddGoal}
      activeOpacity={0.8}
      style={styles.addButton}
    >
      <Text style={styles.buttonText}>Add goal</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    height: 50,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
  },
});
