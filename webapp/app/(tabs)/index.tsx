import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

const FEATURED_RESTAURANTS = [
  {
    id: '1',
    name: 'Burger House',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
    rating: 4.8,
    deliveryTime: '20-30',
    cuisine: 'American',
  },
  {
    id: '2',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    rating: 4.6,
    deliveryTime: '25-35',
    cuisine: 'Italian',
  },
  {
    id: '3',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500',
    rating: 4.9,
    deliveryTime: '30-40',
    cuisine: 'Japanese',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://seeklogo.com/images/D/deliveroo-logo-80C8B96A08-seeklogo.com.png' }} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>Deliveroo - Food App</Text>
        </View>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.title}>What would you like to eat?</Text>
      </View>

      <View style={styles.promotionBanner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500' }}
          style={styles.promotionImage}
        />
        <View style={styles.promotionOverlay}>
          <Text style={styles.promotionText}>50% OFF</Text>
          <Text style={styles.promotionSubtext}>On your first order</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Featured Restaurants</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.restaurantsContainer}>
        {FEATURED_RESTAURANTS.map((restaurant) => (
          <Link
            key={restaurant.id}
            href={`/restaurant/${restaurant.id}`}
            asChild
          >
            <Pressable style={styles.restaurantCard}>
              <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.restaurantDetails}>
                  ⭐️ {restaurant.rating} • {restaurant.deliveryTime} min • {restaurant.cuisine}
                </Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
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
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#00CCBC',
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  promotionBanner: {
    margin: 20,
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  promotionImage: {
    width: '100%',
    height: '100%',
  },
  promotionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  promotionText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  promotionSubtext: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  restaurantsContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  restaurantCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
