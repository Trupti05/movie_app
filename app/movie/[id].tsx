import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const MovieDetails = () => {
    const {id} = useLocalSearchParams();
  return (
    <View className='justify-center items-center flex-1'>
      <Text>Movie Details: {id}</Text>
    </View>
  )
}

export default MovieDetails
