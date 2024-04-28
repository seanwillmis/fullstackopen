export default function MostVotes({ text, votes }) {
  console.log(text);
  console.log(votes);

  const mostVotes = votes.reduce(function (a, b) {
    if (isNaN(a) || a === null || a === "") a = -Infinity;
    if (isNaN(b) || b === null || b === "") b = -Infinity;
    return Math.max(a, b);
  }, -Infinity);

  const indexOfMaxValue = votes.reduce(
    (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
    0
  );

  console.log(mostVotes);
  console.log(indexOfMaxValue);

  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <p>
        {text[indexOfMaxValue]} has {mostVotes} votes
      </p>
    </div>
  );
}
