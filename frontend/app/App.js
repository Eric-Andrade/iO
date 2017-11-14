import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { ThemeProvider } from 'styled-components';
import { colors } from './src/utils/constants';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActionSheetProvider>
        <ThemeProvider theme={colors}>
          <HomeScreen />
        </ThemeProvider>
        </ActionSheetProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
  },
});
