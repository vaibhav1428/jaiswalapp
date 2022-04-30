import React from 'react'
import { Alert, Image,Clipboard, SafeAreaView  } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from './BloodCss'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Customclr from '../../assets/theme/Customclr';
import {  Divider } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import CachedImage from '../../Components/FaseImage/Index';
import i18n from 'i18n-js';



const Bloodhtml = ({form}) => {
 
  const Item = ({ title,url,bloodgroup,id,phone }) => (
    
    <TouchableOpacity style={styles.container} onPress={()=>{Alert.alert(
      "Phone number",
     String(phone) ,
      [{
        text: "Cancel",
        style: "cancel"
      },
        { text: "Copy", onPress: () => {Clipboard.setString(phone); showMessage({
          message: "number coppied successfully",
          type: "success",
          icon: "success",
        });} }
      ]
    );}}>

      <View style={{display:'flex',flexDirection:'row'}}>
      <CachedImage  cacheKey={url}   source={{ uri:url}} style={styles.PostImage} />
       <View style={styles.textportion}>
          <Text style={styles.titleUser}>{title}</Text>
          <Text style={styles.CityUser}>{bloodgroup}</Text>
        </View>  
      </View>

      <View style={{justifyContent:'center',marginRight:widthPercentageToDP('2%')}}>
        <MaterialIcons   size={heightPercentageToDP('3.9%')} name="call"  style={{color:Customclr.orangeshade3}} />
       </View>
    </TouchableOpacity>
  )

 const renderItem = ( {item} ) => (  
        <Item title={item.name} id={item.id}  url={item.profilepic} city={item.bio}  bloodgroup = {item.bloodgroup} phone={item.phone} />
  ); 
  
 

    return (

      <SafeAreaView>

      
      <View>
          <Divider style={{ backgroundColor: Customclr.Lightgray ,marginTop:heightPercentageToDP('1%'),height:4}} />
          <FlatList
            data={form}
            renderItem={renderItem}
            keyExtractor={item => item.id}             
            />
      </View>

      </SafeAreaView>
    )
}
export default Bloodhtml
