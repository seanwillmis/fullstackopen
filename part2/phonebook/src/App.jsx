import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: uuidv4() },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: uuidv4() },
    { name: "Dan Abramov", phone: "12-43-234345", id: uuidv4() },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: uuidv4() },
  ]);
  const [filteredNames, setFilteredNames] = useState(persons);
  const [searchQuery, setSearchQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      phone: newPhone,
      id: uuidv4(),
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
    setNewPhone("");
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilter = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    !query
      ? (setFilteredNames(persons), setSearchQuery(query))
      : console.log("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={searchQuery} onChange={handleFilter} />
      </div>
      <form>
        <div>
          Name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          Phone: <input value={newPhone} onChange={handlePhone} />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((person) => {
            return (
              <p key={person.id}>
                {person.name} - {person.phone}
              </p>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
