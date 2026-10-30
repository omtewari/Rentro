import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Rentro</Text>
      <Text style={styles.heading}>Renting, made simpler.</Text>
      <Text style={styles.caption}>
        Your rental management experience starts here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#F8FAFC',
  },
  brand: { color: '#2563EB', fontSize: 18, fontWeight: '700', marginBottom: 24 },
  heading: { color: '#0F172A', fontSize: 30, fontWeight: '800' },
  caption: { color: '#64748B', fontSize: 16, marginTop: 12, lineHeight: 24 },
});
