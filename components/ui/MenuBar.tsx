import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Documents from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from 'react-native-vector-icons/FontAwesome6';
import Home from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  routeName: string;
  icon: JSX.Element;
}

export default function MenuBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(route.name);
  }, [route]);

  const menu: MenuItem[] = [
    {
      name: 'Home',
      routeName: 'Home',
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
      routeName: 'Saved',
      icon: (
        <Documents
          name="download-circle"
          size={30}
          color={activeTab === 'Saved' ? 'yellow' : 'white'}
        />
      ),
    },
    {
      name: 'Profile',
      routeName: 'Profile',
      icon: (
        <Profile
          name="circle-user"
          size={30}
          color={activeTab === 'Profile' ? 'yellow' : 'white'}
        />
      ),
    },
  ];

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName as never);
  };

  return (
    <View className="py-[20px] absolute  bottom-0 left-0 right-0 px-[10px] bg-[#3F4447]">
      <View className="flex flex-row justify-center gap-[56px]">
        {menu.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => handleNavigation(item.routeName)}>
            <View style={{ alignItems: 'center' }}>
              {item.icon}
              <Text style={{ color: 'white', marginTop: 5 }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
