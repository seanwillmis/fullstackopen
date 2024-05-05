import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: uuidv4() },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: uuidv4() },
    { name: "Dan Abramov", phone: "12-43-234345", id: uuidv4() },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: uuidv4() },
  ]);
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
  };

  return (
    <div>
      <h2>Phonebook</h2>

      {/* FILTER */}
      <Filter searchQuery={searchQuery} handleFilter={handleFilter} />

      {/* PERSON FORM  */}
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleName={handleName}
        handlePhone={handlePhone}
        handleAdd={handleAdd}
      />

      {/* PERSONS */}
      <Persons persons={persons} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
