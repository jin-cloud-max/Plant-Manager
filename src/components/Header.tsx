import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      
      setUserName(user || '')
    }

    loadStorageUserName()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image
        style={styles.image}
        source={{ uri: 'https://instagram.fcgh16-1.fna.fbcdn.net/v/t51.2885-19/s150x150/16908619_1788825871438456_3209390917249138688_a.jpg?tp=1&_nc_ht=instagram.fcgh16-1.fna.fbcdn.net&_nc_ohc=4ttGSw_t96wAX_cFkey&edm=ABfd0MgBAAAA&ccb=7-4&oh=ac65e77dac9522bdc4a4ea355bbf1b99&oe=60A7002C&_nc_sid=7bff83' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },

  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
})
