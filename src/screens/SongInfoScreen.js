import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
export default function SongInfoScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={{marginTop: 50}}>
        <View style={{padding: 12}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons color="white" size={24} name="arrow-back" />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </View>
        </View>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 12,
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          name
        </Text>
        <View
          style={{
            marginHorizontal: 12,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 7,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontWeight: '500',
            }}>
            name
          </Text>
        </View>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              backgroundColor: '#1DB954',
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowdown" color="white" size={20} />
          </Pressable>

          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="cross-bolnisi"
              size={24}
              color="#1DB954"
            />
            <Pressable
              style={{
                backgroundColor: '#1DB954',
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}>
              <Entypo name="controller-play" size={24} color="white" />
            </Pressable>
          </View>
        </Pressable>

        <View>
          <View style={{marginHorizontal: 12, marginTop: 10}}>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                  name
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    gap: 8,
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                    name
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                    name
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                    name
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                    name
                  </Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
