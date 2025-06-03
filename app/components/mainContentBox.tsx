// mainContentBox.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { usePathname } from 'expo-router';

import Start from '../content/start'; 
import Kontakt from '../content/kontakt'; // import your Kontakt component


let pageTitle

const MainContentBox = () => {
    const route = useRoute();

  let pageTitle = route.name;
  console.log(route.name);
  

  let ContentComponent;
  
  switch (usePathname()) {
    case '/Kontakt':
      ContentComponent = Kontakt;
      break;
    default:
      ContentComponent = Start;
  }

  return (
    <View style={styles.box}>
        <View style={styles.container}>
            <Text style={{ color: 'white', textAlign: "center" }}><ContentComponent /></Text>
        </View>
            

        <View style={{
          height: 3,
          backgroundColor: '#E7F0F2', // light grey
          marginVertical: "1%", // spacing above/below the line
          right: 100,
          width: "120%"
        }} />


    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1D3B5A',
      borderRadius: 12,
      padding: "1%",
      marginBottom: "0%",
      width: '100%',
    },
    box: {
      backgroundColor: '#FFFFFF',
      padding: "1%",
      borderRadius: 8,
      marginBottom: 15,
    },
    boxText: {
      fontSize: 16,
      color: '#1D3B5A',
    },
  });
  

export default MainContentBox;
