import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <SearchIcon size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for restaurants or dishes"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Popular Cuisines</Text>
        <View style={styles.cuisineGrid}>
          {['Italian', 'Chinese', 'Indian', 'Mexican', 'Japanese', 'Thai'].map((cuisine) => (
            <View key={cuisine} style={styles.cuisineItem}>
              <Text style={styles.cuisineText}>{cuisine}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  cuisineGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  cuisineItem: {
    width: '33.33%',
    padding: 10,
  },
  cuisineText: {
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    fontSize: 14,
    fontWeight: '500',
  },
});