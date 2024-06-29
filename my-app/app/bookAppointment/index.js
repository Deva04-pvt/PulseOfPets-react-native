import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function BookAppointmentScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Book Appointment Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => router.push("/bookAppointment/details")}
      />
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
