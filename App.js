import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './src/screens/SearchPage';
import Onboarding from './src/screens/Onboarding';
import Dashboard from './src/screens/Dashboard';
import MovieInfo from './src/screens/MovieInfo';

export default function App() {
  return (
    // <Onboarding />
    // <Dashboard/>
    // <SearchPage/>
    <MovieInfo/>
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
