import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Sidebar from './components/sidebar'; // ← relative path
import MainContentBox from './components/mainContentBox';
import Footer from './components/footer';

export default function Layout() {
  return (
    <View style={styles.root}>
      <Sidebar />

      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollArea}>
      <View style={styles.contentWrapper}>
          <MainContentBox />
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E7F0F2',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 50,
    alignItems: 'center', // ✅ zentriert den Inhalt horizontal
  },
  contentWrapper: {
    width: '100%',
    maxWidth: "80%",         // ✅ begrenzt die Breite, damit zentrieren sichtbar ist
    paddingHorizontal: 20, // ✅ optionaler Innenabstand
  },
});
