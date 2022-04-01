const navHome = '../assets/icons/instructor/nav-home.svg';
const navClass = '../assets/icons/instructor/nav-class.svg';
const navStudents = '../assets/icons/instructor/nav-students.svg';
const navBlogs = '../assets/icons/instructor/nav-blog.svg';
const navConfig = '../assets/icons/instructor/nav-config.svg';

const asideAdmin = [
  { id: 1, title: 'Dashboard', link: '/dashboard', icon: navHome },
  { id: 2, title: 'Instructors', link: '/dashboard/instructors', icon: navHome },
  { id: 3, title: 'Students', link: '/dashboard/students', icon: navStudents },
  { id: 4, title: 'Products', link: '/dashboard/products', icon: navHome },
  { id: 5, title: 'Blog Posts', link: '/dashboard/blogs', icon: navBlogs },
];

const asideInstructor = [
  { id: 1, title: 'Dashboard', link: '/dashboard', icon: navHome },
  { id: 2, title: 'My Courses', link: '/dashboard', icon: navClass },
  { id: 3, title: 'My Posts', link: '/dashboard', icon: navHome },
  { id: 4, title: 'Account', link: '/dashboard', icon: navConfig },
];

const asideUser = [
  { id: 1, title: 'Dashboard', link: '/dashboard', icon: navHome },
  { id: 2, title: 'Instructors', link: '/dashboard/instructors', icon: navHome },
  { id: 3, title: 'My Courses', link: '/dashboard', icon: navHome },
  { id: 4, title: 'Orders', link: '/dashboard', icon: navHome },
  { id: 5, title: 'Account', link: '/dashboard', icon: navConfig },
];

export { asideAdmin, asideInstructor, asideUser };
