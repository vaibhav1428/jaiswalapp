import React from 'react'
import { View, Text } from 'react-native'
import { GlobalContext } from '../../context/Provider';
import HomeHtml from './HomeHtml'
import { useNavigation } from '@react-navigation/native'
import PostHtml from './Post/PostHtml';

const Home = () => {

     const nav = useNavigation();
   

    return (
       <HomeHtml/>
    )
}

export default Home
