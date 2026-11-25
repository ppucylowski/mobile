import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './PlannerCards';
export function ComingSoon({ title }: { title: string }) { return <SafeAreaView style={styles.safe}><View style={styles.content}><Text style={styles.title}>{title}</Text><Text style={styles.text}>This space is coming in a future update.</Text></View></SafeAreaView>; }
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.canvas }, content: { padding: 24 }, title: { fontSize: 30, fontWeight: '700', color: colors.ink }, text: { fontSize: 16, lineHeight: 24, color: colors.muted, marginTop: 12 } });
