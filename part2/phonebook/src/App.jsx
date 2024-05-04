import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "123-456-7890" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      phone: newPhone,
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

  const handleName = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    // console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          Phone: <input value={newPhone} onChange={handlePhone} />
        </div>
        {/* <div>debug: {newName}</div> */}
        <div>
          <button type="submit" onClick={handleAdd}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} - {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
