import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Choose a photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Text style={[styles.buttonText, styles.primaryButtonText]}>Use this photo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    backgroundColor: '#111',
  },
  footerContainer: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: '90%',
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#3a3f44',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#ffd33d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  primaryButtonText: {
    color: '#000',
    fontWeight: '600',
  },
});