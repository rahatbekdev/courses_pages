import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/courses">Courses</Link>
        <br />
        <Link to="/announcements">Announcements</Link>
        <br />
        <Link to="/notifications">Notifications</Link>
        <br />
        <Link to="/schedule">Schedule</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
