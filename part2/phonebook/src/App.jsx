import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  /** Get data from db.json file */
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
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
      : axios
          .post("http://localhost:3001/persons", nameObject)
          .then((response) => {
            console.log(response.status, response.data.token);
          }),
      window.location.reload();
    setNewName("");
    setNewNumber("");
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
      <Persons persons={persons} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
