import {useOnMount} from "../lib";
import './App.css'

function App() {
  useOnMount(() => {
    alert('mounted');
  });

  return (
    <div className="App">
      <div className="card">
        <span id="counter">test...</span>
      </div>
    </div>
  )
}

export default App
