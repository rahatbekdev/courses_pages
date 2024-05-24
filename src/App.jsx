import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './components/Courses';
import Rating from './components/Rating';
import Students from './components/Students';
import Materials from './components/Materials';
import Announcements from './components/Announcements';
import Notifications from './components/Notifications';
import Schedule from './components/Schedule';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'courses',
        element: <Courses />,
        children: [
          { path: 'ratings', element: <Rating /> },
          { path: 'students', element: <Students /> },
          { path: 'materials', element: <Materials /> },
        ],
      },
      { path: 'announcements', element: <Announcements /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'schedule', element: <Schedule /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
