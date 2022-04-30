import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, Button, Icon, ListItem } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { SHOPPROFILE } from '../../Nevigation/RoutesName';
import axiosInstance from '../../Helper/axiosInstance';
import Customclr from '../../assets/theme/Customclr';

const Createshop = ({route}) => {


  const { phoneno } = route.params;
const [ishop, setshop] = React.useState([]);
const [isshopload, setshopliad] = React.useState(false);



   React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => 
        _getshop()
          );    
        return unsubscribe;
      }, [navigation]);





  
  const _getshop = () => {
    setshopliad(true);
      axiosInstance.post('/get_shopprofile',{
        id:phoneno,
          }).then((res) =>{
            if(res.data.status==1){
             setshop(res.data.result);
             setshopliad(false);
            }
                
          })

    }
  
    const deleteshop = (id,shopid) => {

      Alert.alert(
        "Delete",
        "Do You Really Want To Delete Your Shop",
        [
          {
            text: "Yes",
            onPress: () => {
              setshopliad(true);
              axiosInstance.post('/delete_shopprofile',{
                id:id,
                shopid:shopid,
                  }).then((res) =>{
                    if(res.data.status==1){
                     setshop(res.data.result);
                     setshopliad(false);
                    }
                        
                  })
              

            },
            style: 'default'
          },
          { text: "No",style:'cancel', onPress: () => { } }
        ]

      )
    
    };


  const navigation = useNavigation();
    
  return (
    <View style={{flex:1}}>
     <View style={{marginTop:heightPercentageToDP('2%'),alignItems:'center'}}>
     <Button
              title={'Create Shop  Profile'}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 20,
                  color: 'white',
                }}
                buttonStyle={{width:widthPercentageToDP('90%'),borderRadius:10}}
                iconRight
                iconContainerStyle={{ marginLeft: 20, marginRight: 0}}
                onPress={()=>{navigation.navigate(SHOPPROFILE,{phoneno:phoneno,shopdt:''})}}
              />

     </View>

     <View style={{marginTop:heightPercentageToDP('2%') ,marginLeft:widthPercentageToDP('3%')}} >
       <Text style={{fontSize:heightPercentageToDP('3%'),fontWeight:'800',textDecorationLine:'underline'}}>
         Your Shop List :
       </Text>

     </View>
{
  isshopload ? 
  
  <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
  <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
  <Text style={{marginTop:heightPercentageToDP('1%'),fontWeight:'700'}}>...Shop Lodding ..</Text>
</View>
  
  
  :
  <View style={{marginTop:heightPercentageToDP('2%') ,flex:1}}>


  <FlatList
   keyExtractor={(item, index) => index.toString()}
   data={ishop}
   renderItem={({ item }) => (

     <ListItem bottomDivider>
       <Avatar source={{uri: item.shopimg}} />
       <ListItem.Content>
         <ListItem.Title>{item.shopname}</ListItem.Title>
         <ListItem.Subtitle>{item.eng_shop_category}</ListItem.Subtitle>
       </ListItem.Content>
       
       <View style={{display:'flex',flexDirection:'row'}}>
         <Icon type='fontawesome' name='edit' reverse size={widthPercentageToDP('4%')} color={Customclr.blue} onPress={()=>{navigation.navigate(SHOPPROFILE,{phoneno:phoneno,shopdt:item})}}   />
         <Icon type='fontawesome' name='delete' reverse size={widthPercentageToDP('4%')} color={Customclr.danger} onPress={()=>{deleteshop(item.id,item.shopid)}} />
       </View>
     </ListItem>
   )}
 />

  </View>

}
   
    </View>
  );
};

export default Createshop;

const styles = StyleSheet.create({});
