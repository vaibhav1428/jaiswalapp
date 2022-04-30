import { useNavigation } from '@react-navigation/native';
import i18n from 'i18n-js';
import React from 'react'
import { View, Text } from 'react-native'
import Customclr from '../../assets/theme/Customclr';
import PeopleHtml from './PeopleHtml'

const People = () => {
    const navigation = useNavigation()
    

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign:'center',
            headerTitle:i18n.t('friends'),
            headerTintColor: Customclr.orangeshade0,
    }), [navigation]
})
    return (
        <>

        <PeopleHtml/>
        </>
    )
}

export default People
