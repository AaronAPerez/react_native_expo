// 1. Modify the root _layout.tsx to support drawer navigation instead of just Stack:

// app/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Drawer>
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

// 2. Create a new notifications screen:

// app/notifications.tsx
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

// 3. Update your package.json to add the required dependencies:

// npx expo install @react-navigation/drawer react-native-reanimated react-native-gesture-handler

// 4. Create a babel.config.js file in your root directory if you don't have one already:

module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'],
    };
  };

//   5. Update your (tabs)/_layout.tsx to include a drawer toggle button:

// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
        // Add drawer toggle button
        headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
      }}
    >
      {/* Rest of your existing Tabs.Screen components */}
    </Tabs>
  );
}

// 6. Update your app entry point (typically App.tsx or app/index.tsx) to include the necessary gesture handler:

// App.tsx
import 'react-native-gesture-handler';
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack />
    </GestureHandlerRootView>
  );
}