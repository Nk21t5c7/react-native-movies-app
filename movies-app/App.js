import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Navigation from './src/components/Navigation';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Header from './src/components/layout/Header';
import AppStack from './src/components/stacks/AppStack';

import axios from 'axios';

axios.interceptors.request.use(config => {
  console.log('🔍 Request URL:', config.url);
  console.log('🧾 Request Headers:', config.headers);
  console.log('📦 Params:', config.params);
  return config;
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        {/* <Header /> */}
        <AppStack />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const theme = createTheme({
  lightColors: {
    primary: 'blue',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});
