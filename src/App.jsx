import Todo from './components/Todo'

function App() {
  return(
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Practice React "/>
      <Todo text="Solve Loomi's challenge" />
    </div>
  );
}

export default App;
