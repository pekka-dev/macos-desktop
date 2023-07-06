import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import { useLayout } from "./contexts/LayoutContext";
import Dock from "./components/Dock";

function App() {
  const { setShowSidebar } = useLayout();
  return (
    <div className="App">
      <Sidebar />
      <Layout>
        <button onClick={() => setShowSidebar(true)}>Show sidebar</button>
        <Dock />
      </Layout>
    </div>
  );
}

export default App;
