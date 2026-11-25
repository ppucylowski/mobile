export type Task = { id: string; title: string; detail: string; duration: string; completed: boolean };
export type Event = { id: string; title: string; time: string; detail: string; kind: 'assignment' | 'work' };

// Plain data models can later be supplied by a repository shared with persistence and widgets.
export const tasks: Task[] = [
  { id: '1', title: 'Outline psychology paper', detail: 'Research methods · Due tomorrow', duration: '20 min', completed: false },
  { id: '2', title: 'Submit reading response', detail: 'English literature · Due today', duration: '15 min', completed: true },
  { id: '3', title: 'Review biology notes', detail: 'Biology · Due Friday', duration: '25 min', completed: false },
];
export const events: Event[] = [
  { id: '1', title: 'Reading response due', time: '11:59 AM', detail: 'English literature', kind: 'assignment' },
  { id: '2', title: 'Work shift', time: '2:00 PM – 6:00 PM', detail: 'Campus café', kind: 'work' },
];
