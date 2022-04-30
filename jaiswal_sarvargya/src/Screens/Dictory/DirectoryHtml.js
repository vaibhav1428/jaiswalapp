import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from './DirectoryCss'
import { TouchableOpacity } from 'react-native';
import {PROFILE } from '../../Nevigation/RoutesName';
import { useNavigation } from '@react-navigation/core';
import { Avatar, Image, ListItem } from 'react-native-elements';




const DirectoryHtml = ({form}) => {

   const  navigation   = useNavigation();
 
      


//  list-----------------------------------------------------------------
  const Item = ({ title,url,city,id ,state}) => (
    <TouchableOpacity  onPress={()=>{navigation.navigate(PROFILE,{'id':id})}}>

    <ListItem bottomDivider key={id}>
        <Image     PlaceholderContent={<ActivityIndicator />}  containerStyle={{width:widthPercentageToDP('10%'),height:widthPercentageToDP('10%')}} source={{uri: url}} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle>{city + "," + state}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  )

 const renderItem = ( {item} ) => (  
        <Item title={item.name} id={item.id}  url={item.profilepic} city={item.city} state={item.state}  />
  );  
  
  // -------------------------------------------

    
    return (
<>

        <FlatList
          data={form}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={4}
          maxToRenderPerBatch={4}
          onEndReachedThreshold={0.1}
          getItemLayout={(data, index) => (
                        {length: 70, offset: 70 * index, index}
                      )}
        />

 
 

    </>
    
    )
}





export default DirectoryHtml
