import "./App.css";
import Dock from "./components/Dock";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Layout>
        <Dock />
      </Layout>
    </div>
  );
}

export default App;
