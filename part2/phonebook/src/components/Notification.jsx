export default function Notification({ message }) {
  if (message === "") {
    return null;
  }

  // in-line styles
  return (
    <div
      style={{
        color: "green",
        background: "lightgrey",
        fontSize: 36,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      }}
    >
      {message}
    </div>
  );
}
