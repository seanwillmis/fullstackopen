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

const Total = (props) => {
  // console.log(props.part1);
  return (
    <div>
      {/* 2. then define the logic */}
      <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total
        part1={parts[0].exercises} // 1. define the parameters here first
        part2={parts[1].exercises}
        part3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
