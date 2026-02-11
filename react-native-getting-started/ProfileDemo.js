import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';

const ProfileDemo = () => {
  return (
    <ImageBackground
      source={require('./assets/pic.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.resumeCard}>

          <View style={styles.accentBar} />

          <View style={styles.content}>

            {/* HEADER */}
            <View style={styles.header}>
              <Text style={styles.name}>Lorlyn Grace Patricio Boiser</Text>
              <Text style={styles.course}>BSIS 3A</Text>
            </View>

            <View style={styles.section}>
              <Text style={{ fontStyle: 'italic', fontSize: 16 }}>I love learning and doing things my own way.</Text>
            </View>
    
            {/* INFO */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Profile Information</Text>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Age</Text>
                <Text style={styles.value}>20 years old</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Favorite Hobby</Text>
                <Text style={styles.value}>Reading</Text>
              </View>
            </View>

            {/* PET PEEVES */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pet Peeves in Class</Text>
              <Text style={styles.listItem}>• People who don’t have basic human decency</Text>
              <Text style={styles.listItem}>• Energy drainers</Text>
              <Text style={styles.listItem}>• Messy or untidy people</Text>
            </View>

          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileDemo;

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  resumeCard: {
    width: '100%',
    flexDirection: 'row',
    padding: 25,
    borderRadius: 25,

    // Transparent glass effect
    backgroundColor: 'rgba(255, 255, 255, 0.43)',

    // Styled edges
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',

    // Soft shadow
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },

    elevation: 10,
  },

  accentBar: {
    width: 5,
    backgroundColor: 'rgba(37, 37, 37, 0.48)',
    borderRadius: 10,
    marginRight: 20,
  },

  content: {
    flex: 1,
  },

  header: {
    marginBottom: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },

  course: {
    fontSize: 14,
    color: '#000000',
    marginTop: 3,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 1,
    color: '#000000',
  },

  infoRow: {
    marginBottom: 6,
  },

  label: {
    fontSize: 12,
    color: '#000000',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
  },

  listItem: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000000',
  },
});
