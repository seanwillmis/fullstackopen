import { useState, useEffect } from "react";
import personService from "./services/persons.js";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /** Get data from db.json file */
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: uuidv4(),
    };

    const alreadyExists = persons.some((perperson) => {
      if (perperson.name === newName) {
        return true;
      }
    });

    alreadyExists
      ? alert(`${newName} is already in the phonebook!`)
      : personService.create(nameObject).then((response) => {
          console.log(response.status, response.data.token);
        }),
      setErrorMessage(`Added ${newName}`),
      window.location.reload();
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (id) => {
    personService.deletePerson(id);
    setPersons(persons.filter((person) => person.id !== id));
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} />

      {/* FILTER */}
      <Filter searchQuery={searchQuery} handleFilter={handleFilter} />

      {/* PERSON FORM  */}
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        handleAdd={handleAdd}
      />

      {/* PERSONS */}
      <Persons
        persons={persons}
        searchQuery={searchQuery}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
