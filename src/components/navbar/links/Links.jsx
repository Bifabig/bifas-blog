import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const Links = () => {
  const links = [
    {
      title: 'HomePage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  // Temp
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.path} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
          <button>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
  );
};

export default Links;
