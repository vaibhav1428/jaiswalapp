import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import {BUSINESSDETAILS, PROFILE } from '../../Nevigation/RoutesName';
import { useNavigation } from '@react-navigation/core';
import { Avatar, Icon, Image, ListItem } from 'react-native-elements';
import Customclr from '../../assets/theme/Customclr';




const BusinessHtml = ({form}) => {

   const  navigation   = useNavigation();
 
      


//  list-----------------------------------------------------------------
  const Item = ({ item,index}) => (
    <TouchableOpacity onPress={()=>navigation.navigate(BUSINESSDETAILS,{shopdetail:item})}>

      <ListItem key={item.shopid} bottomDivider style={{justifyContent:'flex-start'}}>
             <Image     PlaceholderContent={<ActivityIndicator />}  containerStyle={{borderRadius:20,width:widthPercentageToDP('30%'),height:widthPercentageToDP('30%')}} source={{uri:item.shopimg}} />

        <ListItem.Content style={{justifyContent:'flex-start'}}>
          <ListItem.Title h4 style={{color:Customclr.orangeshade4}}>{item.shopname} </ListItem.Title>
          <ListItem.Subtitle  h5 style={{color:Customclr.gray}}> {`${item.shoplocation}`}</ListItem.Subtitle>
          <ListItem.Subtitle h5 style={{color:Customclr.text}}> {item.city + "," + item.state}</ListItem.Subtitle>
          <ListItem.Subtitle h5 style={{color:Customclr.text}}>{item.categoryname}</ListItem.Subtitle>
        </ListItem.Content>

      </ListItem>




    </TouchableOpacity>
  )

 const renderItem = ( {item,index} ) => (  
        <Item item={item}  index={index}  key={index}/>
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





export default BusinessHtml
