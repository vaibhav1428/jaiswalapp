import {
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP,
    heightPercentageToDP

} from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';


export default StyleSheet.create({

    container:{
        paddingHorizontal:widthPercentageToDP('4%'),
        paddingVertical:heightPercentageToDP('2%'),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:Customclr.grey,
        borderWidth:0.5,

    },
    textportion:{
        marginLeft:widthPercentageToDP('2%')
    },
    PostImage:{
        // height:hp('80%'),
        width: widthPercentageToDP('10%'),
        height: widthPercentageToDP('10%'),
        resizeMode: 'cover', 
        borderRadius:widthPercentageToDP('10%')
        
    },
    titleUser:{
        fontSize:heightPercentageToDP('2.2%'),
    },
    CityUser:{
        fontSize:heightPercentageToDP('2.2%'),
        color:Customclr.orangeshade0,
    },
 
    mypicker:{
        width:widthPercentageToDP('30%'),
         alignSelf:'center',                
         
     },
     pickerselect:{       
        color:Customclr.text,
        margin:8
     },
     
});