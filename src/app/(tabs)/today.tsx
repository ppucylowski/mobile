import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, EventCard, NextActionCard, ProgressBar, TaskCard } from '../../components/PlannerCards';
import { events, tasks } from '../../data/planner';
export default function Today() {
  const completed = tasks.filter(task => task.completed).length;
  const date = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
  return <SafeAreaView style={styles.safe} edges={['top']}><ScrollView contentContainerStyle={styles.content}>
    <View style={styles.header}><View style={styles.headerText}><Text style={styles.date}>{date.toUpperCase()}</Text><Text style={styles.heading}>One thing at a time.</Text><Text style={styles.subtitle}>Let’s make today feel a little lighter.</Text></View><Link href="/settings" accessibilityLabel="Open settings" style={styles.settings}>⚙</Link></View>
    <View style={styles.section}><Text style={styles.sectionTitle}>Your next step</Text><NextActionCard task={tasks[0]} /></View>
    <View style={styles.section}><View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Today’s schedule</Text><Link href="/calendar" style={styles.link}>View calendar →</Link></View>{events.map(event => <EventCard key={event.id} event={event} />)}</View>
    <View style={styles.section}><View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Your progress</Text><Text style={styles.count}>{completed} of {tasks.length} tasks</Text></View><ProgressBar value={completed / tasks.length} /><Text style={styles.encouragement}>Every little step counts.</Text></View>
    <View style={styles.section}><View style={styles.sectionHeader}><Text style={styles.sectionTitle}>On your plate</Text><Link href="/tasks" style={styles.link}>All tasks →</Link></View>{tasks.map(task => <TaskCard key={task.id} task={task} />)}</View>
    <Text style={styles.demo}>Example schedule and tasks</Text>
  </ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.canvas }, content: { paddingHorizontal: 22, paddingTop: 20, paddingBottom: 36, maxWidth: 700, width: '100%', alignSelf: 'center' }, header: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 }, headerText: { flex: 1 }, date: { color: colors.green, fontSize: 12, fontWeight: '700', letterSpacing: 1 }, heading: { fontSize: 29, fontWeight: '700', color: colors.ink, marginTop: 8 }, subtitle: { color: colors.muted, fontSize: 16, marginTop: 6, lineHeight: 23 }, settings: { fontSize: 25, color: colors.green, padding: 8 }, section: { marginTop: 30 }, sectionHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 12 }, sectionTitle: { color: colors.ink, fontSize: 19, fontWeight: '700', marginBottom: 12 }, link: { color: colors.green, fontSize: 14, fontWeight: '600', paddingVertical: 4 }, count: { color: colors.muted, fontSize: 14 }, encouragement: { color: colors.muted, fontSize: 14, marginTop: 10 }, demo: { color: colors.muted, fontSize: 12, marginTop: 24, textAlign: 'center' } });
