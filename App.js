import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { FriendProvider } from './context/FriendContext';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { Appearance } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <FriendProvider>
      <PaperProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <TabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </FriendProvider>
  );
}
