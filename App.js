import { StyleSheet, Text, View } from 'react-native';
import FlatListBasics from './components/FlatListBasics';
import PizzaTranslator from './components/PizzaTranslator';
import SectionListBasics from './components/SectionListBasics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is cypher first react native app!!</Text>
      <SectionListBasics />
      {/* <FlatListBasics /> */}
      {/* <PizzaTranslator /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff"
  },
});
