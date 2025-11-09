function Navbar() {
  const name = localStorage.getItem("name");

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#0A66C2",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <div>LinkedIn Clone</div>
      <div>
        {name} &nbsp;
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
