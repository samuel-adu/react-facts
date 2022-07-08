export default function Header() {
  return (
    <nav>
      <div className="navbar container">
        <img
          src={require("../images/react-icon-small.png")}
          alt="React logo"
          className="logo"
        />
        <h2>ReactFacts</h2>
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}
