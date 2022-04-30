import {
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP
} from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';

export default StyleSheet.create({
    PostTop_oneImage:{
        width:wp('14%'),
        height:wp('14%'),
        borderRadius:wp('50%'),
    },
    HomeScroll:{
            backgroundColor:Customclr.Lightgray,
            marginTop:hp('2%')
    },
    HomeContainer :{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: widthPercentageToDP('2%'),
        paddingRight: widthPercentageToDP('2%'),
        paddingTop: widthPercentageToDP('3%'),
        paddingBottom: widthPercentageToDP('3%'),
        backgroundColor:Customclr.light,
    },
     HomeUpload :{
        justifyContent: 'center',
        paddingLeft: widthPercentageToDP('2%'),
        paddingRight: widthPercentageToDP('2%'),
        paddingTop: widthPercentageToDP('3%'),
        paddingBottom: widthPercentageToDP('3%'),
        marginTop:widthPercentageToDP('1%'),
        backgroundColor:Customclr.light,
    },
    HomeSearch: {
        flexDirection:'row',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: Customclr.text,
        borderRadius: widthPercentageToDP('40%'),
        color: "#20232a",
        width:widthPercentageToDP('65%'),
    },
    HomeUpload_TextView: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: Customclr.text,
        borderRadius: widthPercentageToDP('50%'),
        color: "#20232a",
        width:widthPercentageToDP('80%'),
    },
    HomeUpload_one:{
            flexDirection:'row'
    },

    
    HomeSearchTextInput:{
        width:widthPercentageToDP('53%'),
        fontSize:widthPercentageToDP('4%'),
        color:Customclr.text,
    },
    HomeSearch_Button:{
        width:widthPercentageToDP('10%')
    },  
    Homeupload_photo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center'
    },
    Homeupload_photo_Comtainer:{
            marginLeft:widthPercentageToDP('10%'),
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            marginTop:widthPercentageToDP('2%')
    },   
    
    HomeuploadAvatar:{
        width:widthPercentageToDP('10%'),
        borderRadius:wp('50%'),
        backgroundColor:Customclr.Lightgray,
        borderWidth:1,
        borderColor:Customclr.text,
        marginRight:widthPercentageToDP('3%')

    },
    HomeLogo: {
        justifyContent: 'center',
        alignItems: "center",
        width:widthPercentageToDP('20%'),
    },
    Homeavatar: {
        justifyContent: 'center',
        alignItems: "center",
        width:widthPercentageToDP('20%'),
    }


});