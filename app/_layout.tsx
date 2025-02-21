import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#25292e',
          },
          drawerLabelStyle: {
            color: '#fff',
          },
          drawerActiveBackgroundColor: '#ffd33d',
          drawerActiveTintColor: '#25292e',
        }}
      >
        <Drawer.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            drawerLabel: "Main App"
          }} 
        />
        <Drawer.Screen 
          name="notifications" 
          options={{
            drawerLabel: "Notifications",
            title: "Notifications"
          }}
        />
      </Drawer>
      <StatusBar style="light" />
    </>
  );
}