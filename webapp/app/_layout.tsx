import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="restaurant/[id]" options={{ presentation: 'modal' }} />
        <Stack.Screen name="checkout" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}