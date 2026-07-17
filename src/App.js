import "./App.css";
import DraftForm from "./components/DraftForm";
import DraftList from "./components/DraftList";

function App() {
  return (
    <div className="container">
      <h1>📝 Draft Manager</h1>

      <div className="card">
        <DraftForm />
      </div>

      <div className="card">
        <DraftList />
      </div>
    </div>
  );
}

export default App;