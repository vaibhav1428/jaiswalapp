
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADDFAMILY, BLOODGROUP, BUSINESS, BUSINESSDETAILS, COMMENTSCREEN, CONTACTUS, CREATEPOST, CREATESHOP, DIRECTORY, DIRECTORYDETAILS, EDITMETRIMONIAL, EDITPROFILE, EVENTS, METRIMONIALDETAILS, METROMONY, PERSONALMSG, POINTRULE, PREPROFILE, PROFILE, REPOSRTPOST, SETTING, SHARESCREEN, SHOPPROFILE, TAB } from './RoutesName';
import TabNavigation from './TabNavigation';
import Directory from '../Screens/Dictory/Directory';
import Customclr from '../assets/theme/Customclr';
import Blood from '../Screens/BloodGroup/Blood';
import Events from '../Screens/Events/Events';
import Profile from '../Screens/Profile/Profile';
import CreatePost from '../Screens/CreatePost/CreatePost';
import Metromony from '../Screens/Metrimony/Metromony';
import EditProfile from '../Screens/EditProfile/EditProfile';
import ContactUs from '../Screens/ContactUs';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserAction } from '../context/actions/useraction';
import AddFamily from '../Screens/Profile/AddFamily';
import PreProfile from '../Screens/PreProfile/PreProfile';
import Setting from '../Screens/setting/Setting';
import CommentScreen from '../Screens/Home/Post/Comment';
import Business from '../Screens/Business/Business';
import MetrimonialDetails from '../Screens/Metrimony/MetrimonialDetails';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import axiosInstance from '../Helper/axiosInstance';
import EditMetrimonial from '../Screens/EditProfile/EditMetrimonial';
import Personalmsg from '../Screens/Message/Personalmsg';
import { AppState, Platform } from 'react-native';
import PointRule from '../Screens/PratishthaPoint/PointRule';
import ReposrtPost from '../Screens/Home/Post/ReposrtPost';
import i18n from 'i18n-js';
import ShareScreen from '../Screens/shareus/ShareScreen';
import Createshop from '../Screens/EditProfile/Createshop';
import Shopprofile from '../Screens/EditProfile/Shopprofile';
import BusinessDetails from '../Screens/Business/BusinessDetails';



const Stack = createNativeStackNavigator();


function MainNavigation() {

  const [User, setuser] = React.useState("")

  const {userDispatch,userState:{isLoggedIn,data}} = React.useContext(GlobalContext);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('users')
                  .then((val)=>{
                    const details = JSON.parse(val);
                    setuser(JSON.parse(val));

                    const userdetails = {
                      id:details.userid
                    }
                    UserAction(userdetails)(userDispatch);  
                    _registerForPushNotificationsAsync(details.userid);

                    
                    
                  
    });  
      
       
    } catch (error) {}
  };


   React.useEffect(() => {
    

      getUser();


     
    }, []);

    const horizontalAnimation = {
        gestureDirection: 'horizontal',
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      };




   
  const _registerForPushNotificationsAsync = async (id) => {

    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get  notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      if(token !== ''){
        axiosInstance.post('/inst_token',{ 
          user_id:id,
          token:token
        })         
         .then((res) =>{ 

         // console.log(res)

           })




        console.log(token);
      }


      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
        sound:'default'
      });
    }
  };



  return (
      <Stack.Navigator  screenOptions={horizontalAnimation}>



    {/*  testing---------------*/}
    
        

    {/* testing------------- */}

      
          
        
        <Stack.Screen name={TAB} component={TabNavigation}  options={{headerShown: false}}/>
       
        


        <Stack.Screen name={BLOODGROUP} component={Blood}    options={{title: i18n.t('Blood_Donation'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>     

      <Stack.Screen name={DIRECTORY} component={Directory}    options={{title: i18n.t('Directory'),headerStyle: {backgroundColor: Customclr.orangeshade0,
                },
                headerTitleAlign:'left',
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',          
                },
              }}/>


              
      <Stack.Screen name={CREATEPOST} component={CreatePost}  options={{title:i18n.t('Create_Post') ,headerStyle: {backgroundColor: Customclr.light,
                },
                headerTitleAlign:'left',
                headerTintColor: Customclr.text,
                headerTitleStyle: {
                  fontWeight: 'bold',          
                },
              }}/> 

        <Stack.Screen name={ADDFAMILY} component={AddFamily}    options={{title: i18n.t('Add_Family'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: '#fff',
          headerTitleStyle: { 
            fontWeight: 'bold',          
          },
        }}/>

        


          <Stack.Screen name={CONTACTUS} component={ContactUs}  options={{title: i18n.t('Contact_Us'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: Customclr.text,
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>


              
        <Stack.Screen name={EVENTS} component={Events}    options={{title: i18n.t('Events'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          
          headerTintColor: '#fff',
          headerTitleStyle: { 
            fontWeight: 'bold',          
          },
        }}/>

        
        <Stack.Screen name={SETTING} component={Setting}    options={{title: i18n.t('Setting'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>  

              
  

        
        <Stack.Screen name={COMMENTSCREEN} component={CommentScreen}  options={{title: i18n.t('comment'),headerStyle: {backgroundColor: Customclr.light,
          },
          headerTitleAlign:'left',
          headerTintColor: Customclr.text,
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>  


  

        <Stack.Screen name={BUSINESS} component={Business}  options={{title: i18n.t('Business'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: Customclr.text,
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>  
    <Stack.Screen name={METRIMONIALDETAILS} component={MetrimonialDetails}  options={{title: i18n.t('User_Details'),headerStyle: {backgroundColor: Customclr.light,
          },
          headerTitleAlign:'left',
          headerTintColor: Customclr.text,
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>  
        

  
    
      <Stack.Screen name={METROMONY} component={Metromony}    options={{title: i18n.t('MetriMony'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>



        
      <Stack.Screen name={PROFILE} component={Profile}  options={{title:i18n.t('Profile') ,headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: Customclr.text,
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>  
        



          
        <Stack.Screen name={EDITPROFILE} component={EditProfile}    options={{title:i18n.t('EditProfile') ,headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>



      <Stack.Screen name={EDITMETRIMONIAL} component={EditMetrimonial}    options={{title: i18n.t('MetriMony'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },
          headerTitleAlign:'left',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>
 
      <Stack.Screen name={PERSONALMSG} component={Personalmsg}    options={{title:i18n.t('Message'),headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>
 
 
      <Stack.Screen name={POINTRULE} component={PointRule}    options={{title:i18n.t( 'Point_Rule'),headerTitleAlign:'center',headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>
 
 
        

      <Stack.Screen name={REPOSRTPOST} component={ReposrtPost}    options={{title: i18n.t('Report'),headerTitleAlign:'center',headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>

      <Stack.Screen name={SHARESCREEN} component={ShareScreen}    options={{title: "Share",headerTitleAlign:'center',headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>

        
      <Stack.Screen name={SHOPPROFILE} component={Shopprofile}    options={{title: "ShopProfile",headerTitleAlign:'center',headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>


      <Stack.Screen name={CREATESHOP} component={Createshop}    options={{title: "Shop Menu",headerTitleAlign:'center',headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>
 
    
   
      <Stack.Screen name={BUSINESSDETAILS} component={BusinessDetails}    options={{title: "Business_Details",headerTitleAlign:'center',headerStyle: {backgroundColor: Customclr.orangeshade0,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',          
          },
        }}/>
 
    
   
 
       
     
 
        

 


    
       




      
        
      
        
      </Stack.Navigator>
  );
}

export default MainNavigation;