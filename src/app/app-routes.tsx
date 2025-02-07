import { redirect } from 'react-router-dom';
import MyTasks from './my-tasks/my-tasks';
import { routes as myTasksRoute } from './my-tasks/my-tasks-routes';
import Dashboard from './dashboard/dashboard';

export const routes = [
  { index: true, loader: () => redirect('my-tasks') },
  { path: 'my-tasks', element: <MyTasks />, text: 'My Tasks', children: myTasksRoute },
  { path: 'dashboard', element: <Dashboard />, text: 'Dashboard' }
];
