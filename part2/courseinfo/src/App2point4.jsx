const Parts = ({ part }) => {
  return (
    <div>
      {part.name}: {part.exercises} exercises
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map((part) => (
        <Parts part={part} />
      ))}
    </div>
  );
};

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Courses courses={courses} />
    </div>
  );
};

export default App;
