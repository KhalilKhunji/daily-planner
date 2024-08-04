import './App.css';

const App = () => {
  const dailyTasks = [
    { task: 'Wake up', completed: true },
    { task: 'Do stuff', completed: true },
    { task: 'Go to sleep', completed: false },
  ];

  return (
    <>
      <h1>Daily Planner</h1>
      <ul>
        {dailyTasks.map((dailyTask, index) => (
          <li key={index} className={dailyTask.completed ? 'completed' : 'not-completed'}>
            {dailyTask.task}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;