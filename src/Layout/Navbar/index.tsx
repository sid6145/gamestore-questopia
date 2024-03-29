import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="nav-root">
      <div className="nav-wrap">
        <div className="logo">Questopia</div>
        <div className="nav-links">
          <div>Store</div>
          <div>About</div>
          <div>Community</div>
          <div>Sign In</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
