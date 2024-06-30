import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
export default function LikedSongScreen() {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
        <ScrollView style={{flex: 1, marginTop: 50}}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{marginHorizontal: 10}}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 10,
              marginTop: 9,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 9,
                flex: 1,
                height: 38,
                backgroundColor: '#42275a',
                borderRadius: 8,
              }}>
              <AntDesign name="search1" size={20} color="white" />
              <TextInput
                placeholderTextColor={'white'}
                placeholder="Find in Liked songs"
                style={{fontWeight: '500', color: 'white'}}
              />
            </Pressable>

            <Pressable
              style={{
                marginHorizontal: 10,
                backgroundColor: '#42275a',
                padding: 10,
                borderRadius: 8,
                height: 38,
              }}>
              <Text style={{color: 'white'}}>Sort</Text>
            </Pressable>
          </Pressable>
        </ScrollView>
      </LinearGradient>
    </>
  );
}
