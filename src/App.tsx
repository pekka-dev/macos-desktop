import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import { useLayout } from "./contexts/LayoutContext";
import Dock from "./components/Dock";

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
