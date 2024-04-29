import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import backgroundImage from '../assets/bg.png';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Notif from 'react-native-vector-icons/Ionicons';
import MenuBar from '../components/ui/MenuBar';

export default function Profile() {
  return (
    <ImageBackground source={backgroundImage} className="flex-1 bg-cover">
      <StatusBar backgroundColor={'#3F4447'} />
      <ScrollView>
        <View className="p-5 flex-col">
          <View className="flex flex-row justify-between">
            <TouchableOpacity className="flex flex-row gap-3 items-center">
              <Icon name="arrow-left-long" size={28} color="#FFFFFF" />
              <Text className="text-sm font-medium text-white">Onesystem</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Notif name="notifications" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/logo 1.png')}
            className="mt-5 mx-auto"
          />
          <View className="flex flex-col gap-[12px] mt-[32px]">
            <Text
              style={{ fontFamily: 'Roboto' }}
              className="text-lg text-center text-[#fff] tracking-[0.1px] font-medium leading-[20px]">
              Profile
            </Text>
            <Text
              style={{ fontFamily: 'Roboto' }}
              className="text-center text-sm font-extralight tracking-[0.1px] leading-[24px] text-[#fff]">
              With the full suite of Document Builder, you can easily create
              Banner, Namecard, Flyer, Proposal, Letterhead and so much more.
            </Text>
          </View>
        </View>
      </ScrollView>
      <MenuBar />
    </ImageBackground>
  );
}
