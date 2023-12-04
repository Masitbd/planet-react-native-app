import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'

export default function PlanetHeader({title='The Planet App'}) {
  return (
    <View style={styles.container}>
      <Text preset='h3'>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    padding: spacing[5],
    borderWidth: 0.2,
    borderBottomColor: colors.white
},

})