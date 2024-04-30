import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import backgroundImage from '../assets/bg.png';
import MenuBar from '../components/ui/MenuBar';

export default function Profile() {
  return (
    <ImageBackground source={backgroundImage} className="flex-1 bg-cover">
      <StatusBar backgroundColor={'#3F4447'} />
      <ScrollView>
        <View className="p-5 flex-col">
          <Text className="text-sm text-center font-semibold text-[#fff]">
            Your Profile
          </Text>
          {/* Photo Profile Image Bulat */}
        </View>
      </ScrollView>
      <MenuBar />
    </ImageBackground>
  );
}
