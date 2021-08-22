export default function Button() {
  // one way to create a functional button
  const handleClick = (e) => {
    console.log("hello", e);
  };

  // Another way to create a functional button
  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="home">
      <h1>Buttons</h1>

      {/* One way to use a functional button */}
      <button onClick={handleClick}>Click me</button>

      {/* Another way to use a functional button */}
      <button onClick={(e) => handleClickAgain("world", e)}>
        Click me again
      </button>
    </div>
  );
}
