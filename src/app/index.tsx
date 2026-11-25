import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import App from '../../App';
export default function Landing() { return <View style={styles.container}><App /><Link href="/today" style={styles.link}>Open planner →</Link></View>; }
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff' }, link: { textAlign: 'center', color: '#315f4d', fontSize: 17, fontWeight: '700', padding: 24 } });
