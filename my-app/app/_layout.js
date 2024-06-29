import { Tabs } from "expo-router/tabs";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen
        name="appointments/index"
        options={{ title: "Appointments" }}
      />
      <Tabs.Screen name="videoCall/index" options={{ title: "Video Call" }} />
    </Tabs>
  );
}
