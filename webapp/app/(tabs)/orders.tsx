import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Clock, Package } from 'lucide-react-native';

const ORDERS = [
  {
    id: '1',
    restaurant: 'Red Flowers',
    status: 'In Progress',
    items: ['Biryani', 'Dum'],
    total: 15.99,
    time: '25-35 min',
  },
  {
    id: '2',
    restaurant: 'Pizza Palace',
    status: 'Delivered',
    items: ['Margherita Pizza', 'Garlic Bread'],
    total: 22.50,
    time: 'Delivered at 2:30 PM',
  },
];

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Orders</Text>
      </View>

      {ORDERS.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.restaurantName}>{order.restaurant}</Text>
            <Text style={[
              styles.status,
              order.status === 'Delivered' ? styles.statusDelivered : styles.statusInProgress
            ]}>
              {order.status}
            </Text>
          </View>

          <View style={styles.orderItems}>
            {order.items.map((item, index) => (
              <Text key={index} style={styles.item}>• {item}</Text>
            ))}
          </View>

          <View style={styles.orderFooter}>
            <View style={styles.timeContainer}>
              {order.status === 'In Progress' ? (
                <Clock size={16} color="#666" />
              ) : (
                <Package size={16} color="#666" />
              )}
              <Text style={styles.time}>{order.time}</Text>
            </View>
            <Text style={styles.total}>${order.total.toFixed(2)}</Text>
          </View>
        </View>
      ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderCard: {
    margin: 20,
    marginTop: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusInProgress: {
    backgroundColor: '#FFF3E0',
    color: '#FF9800',
  },
  statusDelivered: {
    backgroundColor: '#E8F5E9',
    color: '#4CAF50',
  },
  orderItems: {
    marginBottom: 12,
  },
  item: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
  },
});