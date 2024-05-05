export default function Persons({ filteredNames }) {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredNames.map((person, index) => (
          <li key={index}>
            {person.name} - {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
