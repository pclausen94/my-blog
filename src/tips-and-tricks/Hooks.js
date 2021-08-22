// Always import the hook
import { useState } from "react";

export default function Hooks() {
  // useState hook
  // is used with reactive value(values that might change at some points). Can be every type, string, object, array, boolean.
  const [name, setName] = useState("Mars");
  const [age, setAge] = useState(20);

  const changeValues = () => {
    setName("Jupiter");
    setAge(25);
  };

  return (
    <div>
      <p>
        {name} is {age} million years old
      </p>
      <button onClick={changeValues}>Change values!</button>
    </div>
  );
}
