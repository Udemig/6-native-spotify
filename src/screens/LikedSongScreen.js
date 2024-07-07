import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import SongItem from '../components/SongItem';
import {
  Modal,
  ModalFooter,
  ModalButton,
  ModalContent,
} from 'react-native-modals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
export default function LikedSongScreen() {
  const navigation = useNavigation();

  const [searchedTracks, setSearchedTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

          <View style={{height: 50}} />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              Liked Songs
            </Text>
            <Text style={{color: 'white', fontSize: 13, marginTop: 5}}>
              430 songs
            </Text>
          </View>

          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Pressable
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#1DB954',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <AntDesign name="arrowdown" size={20} color="white" />
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <MaterialCommunityIcons
                name="cross-bolnisi"
                color="#1DB954"
                size={24}
              />
              <Pressable
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#1DB954',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="controller-play" size={24} color="white" />
              </Pressable>
            </View>
          </Pressable>

          {/* {searchedTracks.length === 0 ? (
            <ActivityIndicator size={'large'} color={'gray'} />
          ) : (
            <FlatList
              data={searchedTracks}
              renderItem={({item}) => <SongItem />}
            />
          )} */}
        </ScrollView>
      </LinearGradient>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          backgroundColor: '#5072A7',
          padding: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'absolute',
          left: 20,
          bottom: 10,
          borderRadius: 6,
          marginBottom: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              width: 220,
              color: 'white',
              fontWeight: 'bold',
            }}>
            name
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <AntDesign name="heart" size={24} color={'#1DB954'} />
          <Pressable>
            <AntDesign name="pausecircle" size={24} color={'white'} />
          </Pressable>
        </View>
      </Pressable>
      {/* bakılacak */}
      {/* <ModalContent
        style={{backgroundColor: '#5072A7', width: '100%', height: '100%'}}>
        <View style={{marginTop: 40}}>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AntDesign name="down" size={24} color="white" />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
              song name
            </Text>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </Pressable>

          <View style={{padding: 10, marginTop: 20}}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{width: '100%', height: 330, borderRadius: 4}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  name
                </Text>
                <Text style={{color: '#D3D3D3', marginTop: 4}}>name</Text>
              </View>
              <AntDesign name="heart" size={24} color="#1DB954" />
            </View>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  height: 3,
                  backgroundColor: 'gray',
                  borderRadius: 5,
                }}>
                <View style={[styles.progressbar, {width: 1 * 100}]} />
                <View
                  style={{
                    position: 'absolute',
                    top: -5,
                    width: 10,
                    height: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    left: 100,
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 15}}>00:00</Text>
                <Text style={{color: 'white', fontSize: 15}}>00:00</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 17,
                  alignItems: 'center',
                }}>
                <Pressable>
                  <FontAwesome name="arrows" size={30} color="#03C03C" />
                </Pressable>
                <Pressable>
                  <Ionicons name="play-skip-back" size={30} color={'white'} />
                </Pressable>
                <Pressable>
                  {isPlaying ? (
                    <AntDesign name="pausecircle" size={60} color="white" />
                  ) : (
                    <Pressable
                      style={{
                        backgroundColor: 'white',
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                      }}>
                      <Entypo name="controller-play" size={26} color="black" />
                    </Pressable>
                  )}
                </Pressable>
                <Pressable>
                  <Ionicons name="play-skip-forward" size={30} color="white" />
                </Pressable>
                <Pressable>
                  <Feather name="repeat" size={30} color="#03C03C" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ModalContent> */}
    </>
  );
}

const styles = StyleSheet.create({
  progressbar: {
    height: '100%',
    backgroundColor: 'white',
  },
});
