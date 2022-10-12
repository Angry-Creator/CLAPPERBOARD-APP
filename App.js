import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './src/screens/SearchPage';
import Onboarding from './src/screens/Onboarding';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    // <SearchPage/>
    // <Onboarding />
    <Dashboard/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
