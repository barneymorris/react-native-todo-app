import { Modal, StyleSheet, View } from "react-native";
import { AddButton } from "../AddButton/AddButton";
import { GoalInput } from "../GoalInput/GoalInput";

export const ModalWindow = ({
  isOpen,
  inputValue,
  handleChangeInputValue,
  handleAddGoal,
}) => {
  return (
    <Modal visible={isOpen} animationType="slide" style={styles.modal}>
      <View style={styles.inputContainer}>
        <GoalInput
          inputValue={inputValue}
          handleChangeInputValue={handleChangeInputValue}
        />
        <AddButton handleAddGoal={handleAddGoal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 24,
  },

  modal: {
    background: "#fff",
  },
});
