export default function PersonForm({
  newName,
  newNumber,
  handleName,
  handleNumber,
  handleAdd,
}) {
  return (
    <div>
      <form>
        <div>
          Name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
