const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part2.exercises} />
    </div>
  );
};

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises{" "}
//         {props.part1.exercises + props.part2.exercises + props.part3.exercises}
//       </p>
//     </div>
//   );
// };

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      {/* <Part name={part1.name} exercises={part1.exercises} /> */}
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      {/* <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      /> */}
    </div>
  );
};

export default App;
