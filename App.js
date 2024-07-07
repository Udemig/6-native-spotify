import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Routes';
import {SongsProvider} from './src/context/SongContext';
export default function App() {
  return (
    <>
      <SongsProvider>
        <Navigation />
      </SongsProvider>
    </>
  );
}
