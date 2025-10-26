import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import './global.css';

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
  // return (
  //   <>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <Stack screenOptions={{ headerShown: false }}/>
  //     </SafeAreaView>
  //   </>
  // );
}
