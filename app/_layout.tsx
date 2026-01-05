import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider } from "@gorhom/portal";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "@/store";
import useCachedResources from "@/hooks/useCachedResources";
import { TextInput, View, ActivityIndicator } from "react-native";
import { useEffect } from "react";
export const unstable_settings = {
  anchor: "(tabs)",
};
SplashScreen.preventAutoHideAsync();
const persistor = persistStore(store);

const ReduxWrapper = () => {
  const isLoadingComplete = useCachedResources();
  // const [loaded, error] = useFonts({
  //   SpaceMono: SpaceMonoFont,
  // });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.allowFontScaling = false;

  (TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
  (TextInput as any).defaultProps.allowFontScaling = false;
  useEffect(() => {
    if (isLoadingComplete) {
      SplashScreen.hideAsync();
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <>
      {/* <PinCodeOverlay /> */}
      <Slot
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar />
    </>
  );
};
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <PortalProvider>
                <ReduxWrapper />
                <StatusBar style="auto" />
              </PortalProvider>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
