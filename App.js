import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your goal here"
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
            <Text style={styles.buttonText}>Add goal</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.yourGoals}>List of goals</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    flex: 1,
    height: 50,
  },
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
  yourGoals: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 24,
  },
});
