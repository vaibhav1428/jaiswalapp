import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, Divider, Image } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { METRIMONIALDETAILS } from '../../Nevigation/RoutesName';
import CachedImage from '../../Components/FaseImage/Index';

const MetrimonyHtml = ({form}) => {

    const  navigation    =   useNavigation();

       
  const Item = ({name, city,state,age,study,job,image,id,phoneno }) => (

    // onPress={()=>nav.navigate(METRIMONIALDETAILS,{id:id,name:name})}


    <TouchableOpacity onPress={()=>navigation.navigate(METRIMONIALDETAILS,{phoneno:phoneno,name:name,id:id})}   style={{borderBottomColor:Customclr.Lightgray,borderBottomWidth:2}}>
        <View style={{margin:heightPercentageToDP('1.8%'),display:'flex',flexDirection:'row',justifyContent:'space-between',flex:1}}>
           <View style={{alignSelf:'flex-start',display:'flex',width:widthPercentageToDP('60%')}}>
              <View style={{display:'flex',flexDirection:'row'}}>
              <Text style={{fontSize:heightPercentageToDP('2.3%'),fontWeight:'600',textAlign:'left'}}> 
              {name+" "}</Text>
             </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',color:Customclr.gray}}>
                        {city+","}

                    </Text>
                    <Text  style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',color:Customclr.gray}}>
                        {state}
                        
                    </Text>
                </View>
                 <View style={{display:'flex',flexDirection:'row',marginTop:heightPercentageToDP('1%')}}>
                    <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'500'}}>
                        {age+" Year Old . "}

                    </Text>
                    <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'500'}}>
                        {study}
                        
                    </Text>
                    
                </View>
                <Text style={{fontSize:heightPercentageToDP('2%'),fontWeight:'500'}}>
                    {job}

                </Text>

           </View>

            {/* image section */}
           <View style={{width:widthPercentageToDP('40%')}}>
           <CachedImage  cacheKey={image}   source={{ uri:image }}  resizeMode="stretch" style={{ width:widthPercentageToDP('30%'), height: heightPercentageToDP('12%'),borderRadius:20 }}/>



           </View>
        </View>
       
    </TouchableOpacity>
  )

        const renderItem = ( {item} ) => (  
                <Item name={item.name}  id={item.id}  city={item.city}  state={item.state} age={item.age} study={item.educationlevel} job={item.job} image={item.profilepic} phoneno={item.phone}  />
        );     



    
    return (
        < >
                    
            
            {/* data */}
            <View>
                <FlatList
                  data={form}
                  renderItem={renderItem}
                  keyExtractor={item => item.id} 
                  contentContainerStyle={{ paddingBottom: heightPercentageToDP('25%') }}/>
            </View>

        </>


    )
}




export default MetrimonyHtml
