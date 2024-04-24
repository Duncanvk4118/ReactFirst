const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Posay Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "#f1356d",
            border: "1px solid #f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
        {/* <a href="/posay">Posay</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
