import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/login/LoginPage';
import Register from './src/pages/Register';
import Entry from "./src/pages/apresentation/Entry";
import MenuPage from './src/pages/menu/MenuPage';
import MapCar from './src/pages/map/MapCar';

export default function App() {
  return (
    <View style={styles.body}>
      <StatusBar hidden />
      <MapCar/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
