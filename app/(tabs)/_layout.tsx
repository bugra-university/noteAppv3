import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Header'ı gizler
        tabBarStyle: {
          backgroundColor: '#1E1E1E', // Tab bar arka plan rengi
        },
        tabBarActiveTintColor: '#FFFFFF', // Aktif sekme rengi
        tabBarInactiveTintColor: '#666666', // Pasif sekme rengi
      }}
    >
      {/* Açılış ekranı */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarStyle: { display: 'none' }, // Tab bar'ı gizle
          headerShown: false, // Header da gizli
        }}
      />
      {/* Diğer sekmeler */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          // İkon eklemek isterseniz:
          // tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
