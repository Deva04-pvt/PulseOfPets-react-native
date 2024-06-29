import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Book Appointment"
        onPress={() => router.push("/bookAppointment")}
      />
    </View>
  );
}
