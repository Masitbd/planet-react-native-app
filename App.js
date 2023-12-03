import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { colors } from './src/theme/colors';
import {spacing} from './src/theme/spacing'
import {useFonts} from 'expo-font'
import { typography } from './src/theme/typograpy';
import Text from './src/components/text/text';

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Regular": require("./assets/fonts/Antonio-Medium.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }
  return (
    <View style={styles.container}>
      <Text preset='small' style={{ fontFamily: typography.primary,marginTop:spacing[8]}}>Open up App.js to start working on your application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
