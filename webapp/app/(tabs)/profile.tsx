import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { ChevronRight, CreditCard, MapPin, Bell, Settings, CircleHelp as HelpCircle } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Shahid Afrid</Text>
            <Text style={styles.email}>shahidafrid366@example.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        
        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <MapPin size={20} color="#666" />
            <Text style={styles.menuItemText}>Saved Addresses</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <CreditCard size={20} color="#666" />
            <Text style={styles.menuItemText}>Payment Methods</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Bell size={20} color="#666" />
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More</Text>
        
        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Settings size={20} color="#666" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <HelpCircle size={20} color="#666" />
            <Text style={styles.menuItemText}>Help & Support</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </Pressable>
      </View>

      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
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
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    margin: 20,
    padding: 16,
    backgroundColor: '#FF4B3A',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});