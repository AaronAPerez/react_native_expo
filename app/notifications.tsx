import { View, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NotificationsScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Button 
        onPress={() => router.back()}
        title="Go back"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  }
});