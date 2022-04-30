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
    menucontainer: {
        flex: 1,
        marginTop:hp('2.5%'),
        backgroundColor:Customclr.light
    },
    menutop: {
        flex: 8,
    },
    menumid: {
        flex: 66,
        backgroundColor: "#8E0C0C"
    },
    menubottom: {
        flex: 20,
        backgroundColor: Customclr.light,
        justifyContent:'center',
        alignItems:'center',
    },
    meutop_leftcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: wp('1%')
    },
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: Customclr.light,
        alignItems: 'center',
        justifyContent: 'center',
        height: wp('20%'),
        width: wp('20%'),
        flex: 1,
        margin: wp('5%'),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    title: {
        color: Customclr.text,
        fontSize: wp('3%'),
        textAlign:'center',
        fontWeight:'900'
    },
    menubottom_text:{
    fontSize:hp('2%'),
    fontWeight:'600',
    margin:wp('3%'),
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:Customclr.accent,
    },
    menubottom_button:{
        width:wp('30%'),
        height:hp('10%'),
     
    }


});