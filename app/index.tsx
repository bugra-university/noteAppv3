import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>dotnote</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.quickStartButton}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.quickStartText}>Quick Start</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signInButton}
          onPress={() => router.push('/signin')}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '40%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FF5733',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  quickStartButton: {
    backgroundColor: '#E5E5E5',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: '#FF5733',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },
  quickStartText: {
    color: '#000',
    fontSize: 18,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
  },
}); 