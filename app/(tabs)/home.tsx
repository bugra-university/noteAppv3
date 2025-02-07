import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Home() {
  const [isQuickMenuVisible, setIsQuickMenuVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Üst Başlık */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileImage} />
          <Text style={styles.greeting}>Hello, Laura!</Text>
        </View>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Arama Çubuğu */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#FF5733" />
        <TextInput
          placeholder="Search in notes..."
          style={styles.searchInput}
        />
      </View>

      {/* Kategoriler */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryActive}>
          <Text style={styles.categoryActiveText}>All Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Categories</Text>
        </TouchableOpacity>
      </View>

      {/* Not Listesi */}
      <ScrollView style={styles.notesList}>
        {/* Buraya not kartları gelecek */}
      </ScrollView>

      {/* Quick Start Butonu */}
      <TouchableOpacity 
        style={styles.quickStartButton}
        onPress={() => setIsQuickMenuVisible(true)}
      >
        <Feather name="plus" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Quick Start Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isQuickMenuVisible}
        onRequestClose={() => setIsQuickMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Create New Note</Text>
              <TouchableOpacity onPress={() => setIsQuickMenuVisible(false)}>
                <Feather name="x" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={styles.optionsGrid}>
              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => {
                  setIsQuickMenuVisible(false);
                  router.push('/create-text-note');
                }}
              >
                <View style={[styles.optionIcon, { backgroundColor: '#FFE8E8' }]}>
                  <Feather name="file-text" size={24} color="#FF5733" />
                </View>
                <Text style={styles.optionText}>Text Note</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => {
                  setIsQuickMenuVisible(false);
                  router.push('/create-voice-note');
                }}
              >
                <View style={[styles.optionIcon, { backgroundColor: '#E8F5FF' }]}>
                  <Feather name="mic" size={24} color="#33A1FF" />
                </View>
                <Text style={styles.optionText}>Voice Note</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => {
                  setIsQuickMenuVisible(false);
                  router.push('/create-todo');
                }}
              >
                <View style={[styles.optionIcon, { backgroundColor: '#E8FFE8' }]}>
                  <Feather name="check-square" size={24} color="#33FF57" />
                </View>
                <Text style={styles.optionText}>To-Do List</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => {
                  setIsQuickMenuVisible(false);
                  router.push('/create-image-note');
                }}
              >
                <View style={[styles.optionIcon, { backgroundColor: '#FFE8FF' }]}>
                  <Feather name="image" size={24} color="#FF33FF" />
                </View>
                <Text style={styles.optionText}>Image Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  categories: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  category: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
  },
  categoryActive: {
    backgroundColor: '#E6F3F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#666',
  },
  categoryActiveText: {
    color: '#000',
  },
  notesList: {
    flex: 1,
  },
  quickStartButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '40%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  optionItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
