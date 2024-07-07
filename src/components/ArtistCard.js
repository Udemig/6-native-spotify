import {View, Text, Image} from 'react-native';
import React from 'react';

export default function ArtistCard() {
  return (
    <View style={{margin: 10}}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={{width: 130, height: 130, borderRadius: 5}}
      />
      <Text
        style={{
          fontSize: 13,
          color: 'white',
          fontWeight: '500',
          marginTop: 10,
        }}>
        name
      </Text>
    </View>
  );
}
