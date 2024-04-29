const Header = (props) => {
  console.log("Header", props.course);
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};

const Part = ({ part }) => {
  console.log("Part", part);
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Content = ({ course }) => {
  console.log("Content", course);
  return (
    <div>
      {course.parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
};

const Total = ({ total }) => {
  const partsTotal = total.reduce((n, { exercises }) => n + exercises, 0);

  return (
    <div>
      <p>Number of exercises: {partsTotal}</p>
    </div>
  );
};

export default function Course({ course }) {
  console.log("Course component", course);
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total total={course.parts} />
    </div>
  );
}
