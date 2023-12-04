import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { StyleSheet, FlatList, View, Pressable } from 'react-native'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

export default function Home({navigation}) {
  const renderItem= ({item})=> {
        return(
         <Pressable onPress={()=>{navigation.navigate('Details')}} style={styles.item}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circle,{backgroundColor: item.color}]} /> 
            <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <AntDesign name="right" size={20} color={colors.white} />
         </Pressable>
          
        )
       }
  return (
   <SafeAreaView style={styles.container}>
    <PlanetHeader />
    <FlatList 
    contentContainerStyle={styles.list}
    data={PLANET_LIST}
    //keyExtractor= {(item, index) => item.name}
    keyExtractor= {(item) => item.name}
    renderItem={renderItem}
    ItemSeparatorComponent={()=><View style={styles.separator}/>}
     />
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingLeft: 20,
        justifyContent: 'space-between'
        
    },
    list: {
        padding: spacing[4]
    },
    circle:{
        width: 20, height: 20, borderRadius: 10, marginRight:10
    },
    itemName: {
        textTransform: 'capitalize'
    },
    separator:{
      borderBottomColor: colors.white,
      borderWidth:0.2,
      marginTop:10
    }
})
    
    

