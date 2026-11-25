import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../components/PlannerCards';
export default function Settings() { return <SafeAreaView style={styles.safe}><View style={styles.content}><Link href="/today" style={styles.back}>← Today</Link><Text style={styles.title}>Settings</Text><Text style={styles.text}>Settings will be available in a future update.</Text></View></SafeAreaView>; }
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.canvas }, content: { padding: 24 }, back: { color: colors.green, fontSize: 16, paddingVertical: 10 }, title: { color: colors.ink, fontSize: 30, fontWeight: '700', marginTop: 16 }, text: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: 12 } });
