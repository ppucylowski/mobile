import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { colors } from '../../components/PlannerCards';
const icons: Record<string, string> = { today: '◉', calendar: '▦', tasks: '✓', progress: '◔' };
export default function TabLayout() {
  return <Tabs screenOptions={({ route }) => ({ headerShown: false, tabBarActiveTintColor: colors.green, tabBarInactiveTintColor: colors.muted, tabBarIcon: ({ color }) => <Text accessible={false} style={{ color, fontSize: 21 }}>{icons[route.name]}</Text> })}>
    <Tabs.Screen name="today" options={{ title: 'Today' }} /><Tabs.Screen name="calendar" options={{ title: 'Calendar' }} /><Tabs.Screen name="tasks" options={{ title: 'Tasks' }} /><Tabs.Screen name="progress" options={{ title: 'Progress' }} />
  </Tabs>;
}
