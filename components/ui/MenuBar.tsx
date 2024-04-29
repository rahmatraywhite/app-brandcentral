import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Documents from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from 'react-native-vector-icons/FontAwesome6';
import Home from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: JSX.Element;
}
export default function MenuBar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const menu: MenuItem[] = [
    {
      name: 'Home',
      icon: (
        <Home
          name="home"
          size={30}
          color={activeTab === 'Home' ? 'yellow' : 'white'}
        />
      ),
    },
    {
      name: 'Save Documents',
      icon: (
        <Documents
          name="download-circle"
          size={30}
          color={activeTab === 'Save Documents' ? 'yellow' : 'white'}
        />
      ),
    },
    {
      name: 'Profile',
      icon: (
        <Profile
          name="circle-user"
          size={30}
          color={activeTab === 'Profile' ? 'yellow' : 'white'}
        />
      ),
    },
  ];

  return (
    <View className="py-[20px] absolute  bottom-0 left-0 right-0 px-[10px] bg-[#3F4447]">
      <View className="flex flex-row justify-center gap-[56px]">
        {menu.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => setActiveTab(item.name)}
            onPressOut={() => setActiveTab(null)}>
            <View style={{ alignItems: 'center' }}>
              {item.icon}
              <Text className="text-white mt-[5px]">{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
