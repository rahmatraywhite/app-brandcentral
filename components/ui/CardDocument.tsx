import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface CardDocumentProps {
  title: string;
  description: string;
}

export default function CardDocument({
  title,
  description,
}: CardDocumentProps) {
  return (
    <View className="bg-[#FFFFFF] mb-5 rounded-[28px] p-[28.82px]">
      <View className="flex flex-row items-center gap-5">
        <View className="bg-[#FBE60F] p-[11px] rounded-[8px]">
          <Image source={require('../../assets/pocket.png')} />
        </View>
        <Text className="text-xl text-[#3A3A3A] font-medium leading-[28px]">
          {title}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between mt-3">
        <Text className="text-[#8F8F8F] max-w-[244px] leading-[31px] text-[17px]">
          {description}
        </Text>
        <TouchableOpacity className="bg-[#D5D5D5] p-[6px] w-[40px] h-[40px] flex items-center justify-center rounded-full">
          <Text className="text-xl text-[#3A3A3A] font-medium leading-[28px]">
            <Icon name="arrow-right" size={20} color="#8F8F8F" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
