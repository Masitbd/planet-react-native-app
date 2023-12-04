import { Pressable, StyleSheet, View} from 'react-native'
import React from 'react'
import Text from '../components/text/text'

import PlanetHeader from '../components/planet-header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Details({navigation,route}) {
  const planet = route.params.planet
  console.log('my planet',planet)
  const myNavigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
       <>
       <PlanetHeader />
        <View style={styles.item}>
        <Pressable onPress={()=>{myNavigation.goBack()}}>
        <AntDesign style={{marginRight:5, marginLeft: 5}} name="left" size={20} color={colors.white} />
        </Pressable>
        <Text >Details</Text>
        </View>
       </>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      },
      item:{
        flexDirection: 'row',
        alignItems: 'center',

      }
  });
  