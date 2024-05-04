import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };

    const alreadyExists = persons.some((perperson) => {
      if (perperson.name === newName) {
        return true;
      }
    });
    alreadyExists
      ? alert(`${newName} is already in the phonebook!`)
      : setPersons(persons.concat(nameObject));
    setNewName("");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={handleAdd}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
