import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome/index" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
