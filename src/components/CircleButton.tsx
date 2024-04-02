import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

export interface CircleButtonProps {
  onPress?: () => void;
}
const CircleButton = ({ onPress }: CircleButtonProps) => {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circuleButton} onPress={onPress}>
        <MaterialIcons name="add" size={30} color="#25292e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  circuleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});

export default CircleButton;
