const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item me-3">🍕 Home</li>
        {token ? (
          <>
            <li className="nav-item me-3">🔓 Profile</li>
            <li className="nav-item me-3">🔒 Logout</li>
          </>
        ) : (
          <>
            <li className="nav-item me-3">🔐 Login</li>
            <li className="nav-item me-3">🔐 Register</li>
          </>
        )}
        <li className="nav-item">🛒 Total: ${total.toLocaleString()}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
