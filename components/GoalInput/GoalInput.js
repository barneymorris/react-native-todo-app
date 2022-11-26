import { StyleSheet, TextInput } from "react-native";

export const GoalInput = ({ inputValue, handleChangeInputValue }) => {
  return (
    <TextInput
      value={inputValue}
      onChangeText={handleChangeInputValue}
      style={styles.textInput}
      placeholder="Enter your goal here"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    flex: 1,
    height: 50,
  },
});
