export default function PersonForm({
  newName,
  newPhone,
  handleName,
  handlePhone,
  handleAdd,
}) {
  return (
    <div>
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
    </div>
  );
}
