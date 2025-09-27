import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();

  // تابع برای پخش صدای بوق
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/beep.mp3')  // مسیر فایل صوتی که در بخش Assets آپلود کرده‌اید
    );
    setSound(sound);
    
    try {
      await sound.playAsync();  // پخش صدا
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press the button to hear a beep!</Text>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>Play Beep</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
