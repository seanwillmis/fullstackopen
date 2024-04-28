export default function Votes({ votes, random }) {
  return (
    <div>
      <p>This Anecdote has {votes[random] || 0} votes</p>
    </div>
  );
}
