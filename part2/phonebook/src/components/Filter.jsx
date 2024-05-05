export default function Filter({ searchQuery, handleFilter }) {
  return (
    <div>
      Filter shown with <input value={searchQuery} onChange={handleFilter} />
    </div>
  );
}
