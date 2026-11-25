import { StyleSheet, Text, View } from 'react-native';
import type { Event, Task } from '../data/planner';

export const colors = { ink: '#202d29', muted: '#63726b', green: '#315f4d', pale: '#e4eee7', canvas: '#f7f8f3', line: '#e4eae4' };
export function ProgressBar({ value }: { value: number }) {
  const percent = Math.max(0, Math.min(100, Math.round(value * 100)));
  return <View accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 100, now: percent }} style={styles.track}><View style={[styles.fill, { width: `${percent}%` }]} /></View>;
}
export function TaskCard({ task }: { task: Task }) {
  return <View style={styles.row}><View style={[styles.check, task.completed && styles.checked]}><Text style={styles.checkText}>{task.completed ? '✓' : ''}</Text></View><View style={styles.flex}><Text style={styles.title}>{task.title}</Text><Text style={styles.detail}>{task.detail}</Text></View><Text style={styles.duration}>{task.duration}</Text></View>;
}
export function EventCard({ event }: { event: Event }) {
  return <View style={styles.row}><View style={[styles.eventMark, event.kind === 'work' && styles.workMark]} /><View style={styles.flex}><Text style={styles.eventTime}>{event.time}</Text><Text style={styles.title}>{event.title}</Text><Text style={styles.detail}>{event.detail}</Text></View><Text style={styles.tag}>{event.kind === 'work' ? 'WORK' : 'DUE'}</Text></View>;
}
export function NextActionCard({ task }: { task: Task }) {
  return <View style={styles.next}><Text style={styles.eyebrow}>A GOOD PLACE TO START</Text><Text style={styles.nextTitle}>{task.title}</Text><Text style={styles.nextDetail}>Just start with a small step. You’ve got this.</Text><View style={styles.pill}><Text style={styles.pillText}>{task.duration}  ·  {task.detail}</Text></View></View>;
}
const styles = StyleSheet.create({
  flex: { flex: 1, minWidth: 0 }, row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: colors.line }, title: { fontSize: 16, fontWeight: '600', color: colors.ink }, detail: { fontSize: 14, color: colors.muted, marginTop: 4 }, duration: { fontSize: 13, color: colors.muted }, check: { width: 23, height: 23, borderRadius: 12, borderWidth: 1.5, borderColor: '#a8bbb0', alignItems: 'center', justifyContent: 'center' }, checked: { backgroundColor: colors.green, borderColor: colors.green }, checkText: { color: 'white', fontSize: 14 }, eventMark: { width: 4, alignSelf: 'stretch', backgroundColor: '#8caa97', borderRadius: 4 }, workMark: { backgroundColor: '#d5a46c' }, eventTime: { fontSize: 13, fontWeight: '700', color: colors.green, marginBottom: 4 }, tag: { fontSize: 11, fontWeight: '700', color: colors.muted }, next: { backgroundColor: colors.green, borderRadius: 22, padding: 22, gap: 9 }, eyebrow: { color: '#cee1d4', fontSize: 11, fontWeight: '700', letterSpacing: 1.1 }, nextTitle: { color: '#fff', fontSize: 23, fontWeight: '700' }, nextDetail: { color: '#e1ede5', fontSize: 15, lineHeight: 22 }, pill: { alignSelf: 'flex-start', borderRadius: 12, backgroundColor: '#477563', paddingVertical: 8, paddingHorizontal: 10, marginTop: 5 }, pillText: { color: '#fff', fontSize: 13 }, track: { height: 9, backgroundColor: '#e3ece5', borderRadius: 10, overflow: 'hidden' }, fill: { height: '100%', backgroundColor: '#6f9d7d', borderRadius: 10 },
});
