import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'Biennale-Medium': require('../../assets/fonts/biennale-medium.otf'), // Font dosya yolu
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: false  // Header'ı gizle
        }} 
      />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/bird.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>dotnote</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.quickStartButton}>
            <Text style={styles.quickStartText}>Quick Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Üstte logo, altta butonlar olacak şekilde hizalama
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 40, // Üst ve alt boşluk ekleyerek orantılı bir yerleşim sağlama
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    fontSize: 20,
    color: '#333',
  },
  logoContainer: {
    flex: 1, // Logo ve başlık alanını ortalamak için
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    color: '#F04E30',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 60, // Butonların ekranın altına sabitlenmesini sağlamak için boşluk
  },
  quickStartButton: {
    backgroundColor: '#8f8f8f',
    width: '85%',
    height: 55, // Buton yüksekliği 50px
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  quickStartText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Biennale-Medium',
  },
  signInButton: {
    backgroundColor: '#F04E30',
    width: '85%',
    height: 55, // Buton yüksekliği 50px
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Biennale-Medium',
  },
});
