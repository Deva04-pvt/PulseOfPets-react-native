import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CompletedScreen from "./completed";
import UpcomingScreen from "./upcoming";
import MissedScreen from "./missed";

const Tab = createMaterialTopTabNavigator();

export default function AppointmentsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      <Tab.Screen name="Missed" component={MissedScreen} />
    </Tab.Navigator>
  );
}
