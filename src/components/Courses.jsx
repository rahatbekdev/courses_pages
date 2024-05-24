import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <nav>
        <Link to="ratings">Ratings</Link>
        <br />
        <Link to="students">Students</Link>
        <br />
        <Link to="materials">Materials</Link>
        <br />
      </nav>
      <Outlet />
    </div>
  );
};

export default Courses;
