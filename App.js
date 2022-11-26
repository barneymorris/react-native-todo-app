import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GoalsList } from "./components/GoalsList/GoalsList";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeInputValue = (val) => {
    setInputValue(val);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAddGoal = () => {
    const copy = [...goals];

    if (inputValue.length) {
      copy.push(inputValue);
    }

    setIsModalOpen(false);
    setInputValue("");
    setGoals(copy);
  };

  const handleDeleteGoal = (goal) => {
    const filtered = goals.filter((item) => item !== goal);
    setGoals(filtered);
  };

  return (
    <>
      <StatusBar />

      <ModalWindow
        isOpen={isModalOpen}
        inputValue={inputValue}
        handleAddGoal={handleAddGoal}
        handleChangeInputValue={handleChangeInputValue}
      />

      <View style={styles.appContainer}>
        <Button title="Add new goal" onPress={handleOpenModal} />
        <View>
          <Text style={styles.yourGoals}>List of goals</Text>
          <GoalsList goals={goals} handleDeleteGoal={handleDeleteGoal} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 64,
    paddingHorizontal: 16,
  },
  yourGoals: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 24,
  },
});
