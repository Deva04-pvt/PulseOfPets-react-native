import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function AppointmentDetailsScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Appointment Details Screen</Text>
      <Button title="Return to Home" onPress={() => router.push("/")} />
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
