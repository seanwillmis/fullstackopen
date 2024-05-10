export default function Persons({ persons, searchQuery, handleDelete }) {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((person) => {
            return (
              <p key={person.id}>
                {person.name} - {person.number}{" "}
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </p>
            );
          })}
      </ul>
    </div>
  );
}
