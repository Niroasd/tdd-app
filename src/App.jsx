import Counter from './components/Counter';
import Date from './components/Date';
import './App.css'

function App() {
  return (
    <div>
      <Date />
      <h2>React app woo</h2>
      <Counter initialCount={0} />
    </div>
  );
}

export default App
