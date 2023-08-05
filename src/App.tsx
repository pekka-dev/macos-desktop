import clsx from "clsx";
import AppProvider from "contexts/AppContext";
import { useLayout } from "contexts/LayoutContext";
import "./App.css";
import Application from "components/Application";
import { AppWindow } from "@phosphor-icons/react";

function App() {
  return (
    <AppProvider>
      <Application
        icon={<AppWindow size={48} color="#4f7a27" weight="fill" />}
        element={<section className="sample-application">this</section>}
        name="sample-app"
      />
      <Application
        icon={<AppWindow size={48} color="#ef7a27" weight="fill" />}
        element={<section className="sample-application">this</section>}
        name="sample-app-1"
      />
    </AppProvider>
  );
}

export default App;
