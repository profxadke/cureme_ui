import UserList from '../components/UserList.svelte';
import UserDetail from '../components/UserDetail.svelte';
import MedicationList from '../components/MedicationList.svelte';
import MedicationDetail from '../components/MedicationDetail.svelte';
import AppointmentList from '../components/AppointmentList.svelte';
import AppointmentDetail from '../components/AppointmentDetail.svelte';
import ReminderList from '../components/ReminderList.svelte';
import ReminderDetail from '../components/ReminderDetail.svelte';
import NotificationList from '../components/NotificationList.svelte';
import NotificationDetail from '../components/NotificationDetail.svelte';

export default [
  { path: '/', component: UserList },
  { path: '/users/', component: UserList },
  { path: '/users/:id', component: UserDetail },
  { path: '/medications/', component: MedicationList },
  { path: '/medications/:id', component: MedicationDetail },
  { path: '/appointments/', component: AppointmentList },
  { path: '/appointments/:id', component: AppointmentDetail },
  { path: '/reminders/', component: ReminderList },
  { path: '/reminders/:id', component: ReminderDetail },
  { path: '/notifications/', component: NotificationList },
  { path: '/notifications/:id', component: NotificationDetail },
];
