import {
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP
} from 'react-native-responsive-screen';
import Customclr from '../../../assets/theme/Customclr';


export default StyleSheet.create({
HomeContainer:{
    backgroundColor:Customclr.light,
    marginTop:wp("1%"),
    marginBottom:wp("1%"),
    flex:1
},


PostTop:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
margin:wp('3%'),
height:hp('5%'),
},


PostTop_oneImage:{
    width:wp('12%'),
    height:wp('12%'),
    borderRadius:wp('50%'),
    overflow:'hidden'
},
PostTop_one:{
    display:'flex',
    flexDirection:'row',
},
PostTop_oneText:{
marginLeft:wp('2%')
},
PostToptwo:{
    marginTop:hp('1%')
},
PostImageContainer:{
    height:hp('80%'),
    resizeMode: 'contain',
},
PostVideoContainer:{
    resizeMode: 'contain',

},


PostCommentContainer:{
    height:hp('10%'),
},
PostImage:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    
}


});