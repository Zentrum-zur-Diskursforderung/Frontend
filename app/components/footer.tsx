// footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer-Inhalt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
  },
});

export default Footer;
